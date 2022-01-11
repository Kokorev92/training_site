const net = require('net')
const express = require('express')
const req = require('express/lib/request')
const app = express()

// Обработка статических файлов
app.use(express.static(__dirname + "/public"))

// Запускаем сервер
app.listen(8000)