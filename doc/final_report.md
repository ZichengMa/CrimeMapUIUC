# Final Report

## Table implementation
Add: None

Remove: We delete three relation tables Occur (Crime and Street), Have (Street and StreetBoard), and Grade (Street and SafetyLevel)

Reason: Because Crime, StreetBoard and Street have foreign keys pointing to the other tables, which makes the relation table redundant. So the current design is more reasonable

## Functionality
Add: 
1. Make a unique icon for each crime type
2. Search the crime based on time, crime type, and address
3. Update the Crime data

Remove:
1. Visualize the safety level on the street
2. A time-based version of the map, in which safety level will be calculated base on crimes in different time slots of a day. (simple feature, view of database)
3. Users can find a safe and fast balanced path from the source to the destination.
4. Display of emergency devices
5. Alert of area

Reason:
1. We design icon for each crime type to make the app more easy to use
2. Implement Search to let user quickly get the crime information they want
3. Add a function of updating to correct some misinformation
4. Removing those functions because they are not quite related to the database and really time consuming to implement

## Advanced Database Program:
1. We design a trigger in the Crime, making it possible once a crime data inserted in the table the database program can automatically change the crime frequency, and crime number of a street.
2. We design a stored procedure to update the Crime trend in a street.
3. We also have some advanced queries to discover the top 20 most dangerous streets in UIUC.