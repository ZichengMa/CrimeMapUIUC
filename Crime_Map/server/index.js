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


app.post('/insert', (req, res) => {
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

app.post('/delete', (req, res) => {
    const id = req.body.id;
    db.query('DELETE from User where ID = ?', [id],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values Inserted");
        }
    })
})

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

app.post('/advanced1', (req, res) => {
    const crime_type1 = req.body.crime_type1;
    const crime_type2 = req.body.crime_type2;
    const streetid1 = req.body.streetid1;
    const streetid2 = req.body.streetid2;

    db.query("SELECT CrimeID, CrimeType, CrimeTime, Address, Description \
	        FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street\
	        WHERE CrimeType = ? AND StreetID = ? \
	        UNION\
	        SELECT CrimeID, CrimeType, CrimeTime, Address, Description\
	        FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street\
	        WHERE CrimeType = ? AND StreetID = ?",[crime_type1,streetid1,crime_type2,streetid2],
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send(result);
                }
            });
});

app.post('/advanced2', (req, res) => {
    db.query("SELECT Name, level, levelnum.num FROM Crime_Map.Street s JOIN Crime_Map.SafetyLevel l ON (s.Frequency >= l.MinDanger AND s.Frequency <= l.MaxDanger) \
        NATURAL JOIN   (SELECT level,count(s.StreetID) AS num \
                    FROM Crime_Map.Street s RIGHT JOIN Crime_Map.SafetyLevel l \
                    ON (s.Frequency >= l.MinDanger AND s.Frequency <= l.MaxDanger) \
                    GROUP BY Level \
                    ORDER BY Level ) AS levelnum \
        ORDER BY level desc LIMIT 20",[],
            (err, result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send(result);
                }
            });
});


app.get("/", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');})

app.listen(3001, ()=> {
    console.log("Yey, your serer is running on port 3306");
});

