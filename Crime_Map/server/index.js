const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
app.use(express.json());
app.use(cors());



const fs = require('fs');





const db = mysql.createConnection({
    user: 'root',
    host: "35.193.236.19",
    password:"test1234",
    database: 'Crime_Map',
    port: 3306
});

// db.connect;

app.post('/', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const passward = req.body.passward;
    const sex = req.body.sex;

    db.query('INSERT INTO User (ID, Name, Sex, Passward) values (?, ?, ?, ?)', 
    [id, name, sex, passward], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
    });
});

// app.post('/', (req, res) => {
//     console.log(req.body);
// });

app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');})

app.listen(3001, ()=> {
    console.log("Yey, your serer is running on port 3306");
});

