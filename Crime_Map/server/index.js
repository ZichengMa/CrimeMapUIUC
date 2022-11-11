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


app.post('/', (req, res) => {
    const name = req.body.name;
    const passward = req.body.passward;
    const sex = req.body.sex;

    db.query('INSERT INTO User (Name, Sex, Passward) values (?, ?, ?)', 
    [name, sex, passward], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
    });
});



app.post('/searchdb', (req, res) => {
    const crime_type = req.body.crime_type;
    const streetid = req.body.streetid;
    const fromdate = req.body.fromdate;
    const todate = req.body.todate;
    if(crime_type == 'All' && streetid != 0){
        db.query("SELECT Address, CrimeType, date_format(CrimeTime,'%Y-%m-%d %H:%i:%s') as CrimeTime, Description \
                FROM Crime\
                WHERE StreetID = ? AND Date(CrimeTime) between ? and ? ",[streetid,fromdate,todate], 
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        });
    }
    if(crime_type != 'All' && streetid==0){
        db.query("SELECT Address, CrimeType, date_format(CrimeTime,'%Y-%m-%d %H:%i:%s') as CrimeTime, Description \
                  FROM Crime\
                  WHERE Date(CrimeTime) between ? and ? AND CrimeType=?",[fromdate,todate,crime_type], 
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        });
    }
    if(crime_type == 'All' && streetid == 0){
        db.query("SELECT Address, CrimeType, date_format(CrimeTime,'%Y-%m-%d %H:%i:%s') as CrimeTime, Description \
                  FROM Crime\
                  WHERE Date(CrimeTime) between ? and ? ",[fromdate,todate], 
        (err, result) => {
            console.log(result);
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        });
    }
    if(crime_type != 'All' && streetid != 0){
        db.query("SELECT Address, CrimeType, date_format(CrimeTime,'%Y-%m-%d %H:%i:%s') as CrimeTime, Description \
                  FROM Crime\
                  WHERE StreetID = ? AND Date(CrimeTime) between ? and ? AND CrimeType=?",[streetid,fromdate,todate,crime_type], 
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        });
    }


});

app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');})

app.listen(3001, ()=> {
    console.log("Yey, your serer is running on port 3306");
});

