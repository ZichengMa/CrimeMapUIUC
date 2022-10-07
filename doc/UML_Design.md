
## Entity Notation
1. User: Contain user information including UserID, Name, etc
2. Crime: Contain crime information for each criminal case, such as CrimeID Crime type, etc
3. Street: Contain Street information
4. StreetBoard: Street board is a board that every user can write comment on it. They can write anything concerning about the crime information of the street on the board and everyone can view the comment on the board
5. SafetyLevel: it contains the level (a, b, c) and minimal danger number and maximum danger number for that street
6. WeeklyReport: contains weekly crime information such as most dangerous street, least dangerous street, etc.

## Description of Assumption
1. StreetID in Crime table must be in StreetID in street
2. User can report many Crime, a crime can only be reported by one user
3. A crime can only happen in one Street, a Street can contain many crimes
4. A user can write on many StreetBoards, a StreetBoard can be written by many users
5. A Street Board belongs to only one Street, a Street can only have one streetBoard
6. StreetID in street board must be in the StreetID in the Street
7. A Street can have only one safety level, many street can share the same safety level
8. A Weekly report contain many crimes but a crime can only belong to one weekly report.

