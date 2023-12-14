

const http = require('http');
const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end(`<h1>Страница создана</h1>
                <a href="/about">about</a>
                <p>Просмотров</p>: `);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end(`<h1>About</h1>
                <a href="/">Главная</a>
                <p>Просмотров</p>: `);
    } else {
        res.writeHead(
            404,
            {'Content-Type': 'text/html; charset=UTF-8'}
        );
        res.end('<h1>Такой страницы не существует</h1>')
    }
    
})

server.listen('3000')
