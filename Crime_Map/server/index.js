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
    const password = req.body.password;
    const sex = req.body.sex;

    db.query('INSERT INTO User (Name, Sex, passward) values (?, ?, ?)', 
    [name, sex, password]);

    db.query('SELECT ID FROM User WHERE Name = ? AND Sex = ? AND passward = ? LIMIT 1',[name, sex, password],
    (err, result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    })
});

app.get('/user', (req, res) => {
    db.query("SELECT * FROM User", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/crimemap', (req, res) => {
    db.query("SELECT * FROM Crime", [], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
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

app.put('/update', (req, res) => {
    const id = req.body.id;
    const description = req.body.description;
    const userID = req.body.userID;
    const match = db.query('Select UserID FROM Report WHERE CrimeID = ? AND UserID = ?',[id, userID],
    (err, result) =>{
        if(result.length == 0){
            res.send('0')
        }else{
            db.query('Update Crime SET Description = ? WHERE CrimeID = ?', [description,id],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send("Update Seccessfully!");
                }
            })
        }
    })
})

app.put('/update_checkcrime', (req, res) => {
    const userID = req.body.userID
    db.query('Select CrimeID FROM Report WHERE UserID = ?', [userID],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})



app.post('/ReportCrime', (req, res) => {
    const address = req.body.address;
    const streetid = req.body.streetid;
    const crime_type = req.body.crime_type;
    const crimetime = req.body.crimetime;
    const description = req.body.description
    const userID = req.body.userID
    
    db.query('INSERT INTO Crime (Address, CrimeType, ByUser, CrimeTime, Description, StreetID) values (?, ?, ?, ?, ?, ?)', 
    [address, crime_type, 1, crimetime, description, streetid], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('INSERT INTO Report (UserID, CrimeID) VALUES (?, ?)',[userID, result.insertId])
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


app.post('/streetboard_search', (req, res) => {
    const streetid = req.body.streetid
    db.query('SELECT Content FROM StreetBoard WHERE StreetID = ?', 
    [streetid], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post('/streetboard_insert', (req, res) => {
    const streetid = req.body.streetid
    const newboardContent = req.body.newboardContent
    const userID = req.body.userID
    db.query('Update StreetBoard SET Content = ? WHERE StreetID = ?', [newboardContent,streetid])
    db.query('SELECT BoardID FROM StreetBoard WHERE StreetID = ?', [streetid],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            const boardID= result[0].BoardID
            db.query('SELECT * FROM Post WHERE UserID = ? AND BoardID = ?',[userID, boardID],
            (err, result)=>{
                if(result.length==0){
                    db.query('INSERT INTO Post (UserID, BoardID) values (?, ?)', 
                    [userID, boardID])
                }
            })
            res.send("Update Seccessfully!");
        }
    })

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


app.post("/signin", (req, res)  => {
    const user = req.body.user;
    const password = req.body.password;

    db.query("SELECT * FROM Crime_Map.User WHERE ID = ? AND Passward = ?", [user, password], 
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    );
});

app.post('/weeklyreport', (req, res) => {
    db.query("CALL UpdateWeeklyReport")
    db.query("SELECT * FROM Crime_Map.WeeklyReports",[],
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
    console.log("Yey, your serer is running on port 3001");
});

