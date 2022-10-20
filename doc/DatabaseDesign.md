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
### SafetyLevel
    CREATE TABLE SafetyLevel (
        LEVEL INT NOT NULL,
        MinDanger DOUBLE NOT NULL,
        MaxDanger DOUBLE NOT NULL,
        PRIMARY KEY (LEVEL)
    );