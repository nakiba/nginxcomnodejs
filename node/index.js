const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('nakiba')`
connection.query(sql)

let nomes = [];

connection.query("SELECT * FROM people", function(error, result, fields){
    if(error) return callback(error);

    result.forEach(element => {
        nomes.push(element.name + '<br>');            
    });
})

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1><br>' + nomes)
})

connection.end()

app.listen(port, () => {
    console.log('Rodando na porta' + port)
})