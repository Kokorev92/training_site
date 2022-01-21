const net = require('net')
const express = require('express')
const req = require('express/lib/request')
const sqlite3 = require('sqlite3')

const app = express()
// Обработка статических файлов
app.use(express.static(__dirname + "/public"))

// Запускаем сервер
app.listen(8000)

app.get('/products', (request, response) => {
    get_data((json) => { response.send(json) })
})

app.get('/*', (request, response) => {
    response.sendFile(__dirname + "/public/index.html")
})

function get_data(send_response) {
    let db = new sqlite3.Database('db.sqlite', sqlite3.OPEN_READONLY)
    db.all('SELECT id,name,desc,cost,img_src FROM products;', [], (err, rows) => {
        if (err) {
            throw err
        }

        let resp = JSON.stringify(rows)
        send_response(resp)
    })
    db.close()
}