const express = require('express')
const fs = require('fs')
const path = require('path')
const pathFile = path.join(__dirname, 'counter.json')
fs.readFile(pathFile, 'utf-8', (err, data) => {
    let dataFromJson = JSON.parse(data)
    countMain = dataFromJson['/']
    countAbout = dataFromJson['/about']
})
let countMain = ''   
let countAbout = ''

const app = express()
const port = 3000;

function couterFoo (page) {
   fs.readFile(pathFile, 'utf-8', (err, data) => {
        if (err) {
            console.log('Ошибка чтения JSON файла');
        } else {
            let dataFromJson = JSON.parse(data)
            countMain = dataFromJson['/']
            countAbout = dataFromJson['/about']
            if (page == '/') {
                countMain = dataFromJson['/']
                countMain++
                fs.writeFileSync(pathFile, JSON.stringify({
                    '/': countMain,
                    '/about': countAbout
                }, null, 2))
            } else if (page == '/about') {
                countAbout = dataFromJson['/about']
                countAbout++
                fs.writeFileSync(pathFile, JSON.stringify({
                    '/': countMain,
                    '/about': countAbout
                }, null, 2))
            }
        }
    })
}

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    couterFoo(req.url)
    next();
})

app.get("/", (req, res) => {
    res.send(`<h1>Main</h1><a href = "/about">About</a><p>Просмотров: ${countMain}</p>`)
})

app.get("/about", (req, res) => {
    res.send(`<h1>About</h1><a href = "/">Main</a><p>Просмотров: ${countAbout}</p>`)
})


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})