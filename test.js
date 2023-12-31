// const fs = require('fs')

// fs.readFile(__filename, 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Что-то пошло не так, файл не прочитан');
//     } else {
//         console.log(data);
//     }
// })

// //перезапись файла
// fs.writeFile(__filename, 'console.log("Helllo")', (err) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log('The file was saved!');
// })

// //добавление в файл
// fs.appendFile(__filename, '\nconsole.log("Приветики");', (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log("The file was saved!");
// })

// //синхронные методы чтения и записи
// try {
//     const result = fs.readFileSync(__filename, 'utf-8')
//     console.log(result);
// } catch (err) {
//     console.error(err);
// }

// try {
//     fs.writeFileSync(__filename, '\nconsole.log("Приветики");')
//     console.log('The file was saved! ;)');
// } catch (error) {
//     console.error(error);
// }

//модуль path. Помогает работать с путями в файловой системе
// const path = require('path')

// console.log(path.join('/Users/29-vi/Desktop', '/Work/newNodeJS/test.js'));
// console.log(path.parse('/Users/29-vi/Desktop/Work/newNodeJS/test.js'));
// console.log(path.dirname('/Users/29-vi/Desktop/Work/newNodeJS/test.js'));
// console.log(path.extname('/Users/29-vi/Desktop/Work/newNodeJS/test.js'));

//модуль os. Позволяет получать информацию об операционной системе.

// const os = require('os')

// console.log(os.cpus()); //информация о ядрах проца
// console.log(os.arch()); //информация об архитектуре процессора
// console.log(os.freemem()); //кол-во свободной памяти в байтах
// console.log(os.totalmem() / 1024 / 1024 / 1024); //общее кол-во памяти в гигабайтах












