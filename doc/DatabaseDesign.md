# Database Design
## Data Definition Language (DDL)
### Street
    CREATE TABLE Street (
        County VARCHAR(45) NOT NULL,
        Frequency FLOAT NOT NULL,
        Name VARCHAR(45) NOT NULL,
        NumCrime INT NOT NULL,
        StreetID INT NOT NULL,
        Trend FLOAT NOT NULL,
        ZipCode INT NOT NULL,
        PRIMARY KEY (StreetID)
    );
### StreetBoard
    CREATE TABLE StreetBoard (
        Content VARCHAR(10000) DEFAULT NULL,
        StreetID INT NOT NULL,
        BoardID INT NOT NULL,
        PRIMARY KEY (BoardID),
        FOREIGN KEY (StreetID)
            REFERENCES Street(StreetID)
            ON DELETE SET NULL
            ON UPDATE CASCADE 
    );
### User
    CREATE TABLE User (
        ID INT NOT NULL,
        Name VARCHAR(45) DEFAULT NULL,
        SEX VARCHAR(45) DEFAULT NULL,
        Password INT NOT NULL,
        PRIMARY KEY (ID)
    );
### Crime
    CREATE TABLE Crime (
        CrimeID INT NOT NULL,
        Address VARCHAR(300) DEFAULT NULL,
        CrimeType VARCHAR(45) NOT NULL,
        ByUser TINYINT(1) NOT NULL,
        CrimeTime DATETIME NOT NULL,
        Description VARCHAR(200) NOT NULL,
        PRIMARY KEY (CrimeID),
        FOREIGN KEY (StreetID) REFERENCES Street(StreetID) 
    );
### SafetyLevel
    CREATE TABLE SafetyLevel (
        LEVEL INT NOT NULL,
        MinDanger DOUBLE NOT NULL,
        MaxDanger DOUBLE NOT NULL,
        PRIMARY KEY (LEVEL)
    );

## Advance Query

```sql
	SELECT CrimeID, CrimeType, CrimeTime, Address, Description
	FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street
	WHERE CrimeType = 'Theft' AND Name = 'East Green Street'
	UNION
	SELECT CrimeID, CrimeType, CrimeTime, Address, Description
	FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street
	WHERE CrimeType = 'Theft' AND Name = 'East Springfield Avenue'
```

<img src="imgs\ADQUERY1_15rows.png" style="zoom:67%;" />









```sql

```



## Indexing 

```sql
EXPLAIN ANALYZE 
	SELECT CrimeID, CrimeType, CrimeTime, Address, Description
	FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street
	WHERE CrimeType = 'Theft' AND Name = 'East Green Street'
	UNION
	SELECT CrimeID, CrimeType, CrimeTime, Address, Description
	FROM Crime_Map.Crime NATURAL JOIN Crime_Map.Street
	WHERE CrimeType = 'Theft' AND Name = 'East Springfield Avenue'
	
```

<img src="imgs\QUERY1_without_index.png" style="zoom: 80%;" />

Firstly, we analyzed the 1st query without index. The filter part cost a lot.

```sql
CREATE INDEX index_crimetime ON Crime_Map.Crime (CrimeTime)
```

<img src="imgs\QUERY1_index1.png" style="zoom:80%;" />

Next, we added an index on CrimeTime attribute but we found that the cost and time didn't change a lot.

```sql
CREATE INDEX index_crimetype ON Crime_Map.Crime (CrimeType)
```

<img src="imgs\QUERY1_index2.png" style="zoom:80%;" />

Then, we added an index on CrimeType attribute which is an attribute in our filter condition. This time, the performance improved a lot.

```sql
CREATE INDEX index_streetname ON Crime_Map.Street (Name)
```

<img src="imgs\QUERY1_index3.png" style="zoom:80%;" />

Finally, we added one more index on Street's Name which is also an attribute in our filter condition. Our query's speed also became faster. And the cost of filter decreased a lot from 44.05 to 0.97.
