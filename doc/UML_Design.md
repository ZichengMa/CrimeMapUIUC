
Table Notation:
    User: Contain user information including UserID, Name, etc
    Crime: Contain crime information for each criminal case, such as CrimeID Crime type, etc
    Street: Contain Street information
    StreetBoard: Street board is a board that every user can write comment on it. They can write anything concerning about the crime information of the street on the board and everyone can view the comment on the board
    SafetyLevel: it contains the level (a, b, c) and minimal danger number and maximum danger number for that street

Description of Assumption
    1. StreetID in Crime table must be in StreetID in street
    2. User can report many Crime, a crime can only be reported by one user
    3. A crime can only happen in one Street, a Street can contain many crimes
    4. A user can write on many StreetBoards, a StreetBoard can be written by many users
    5. A Street Board belongs to only one Street, a Street can only have one streetBoard. 
    6. A Street can have only one safety level, many street can share the same safety level

