# Final Report

## Changes in direction

Our main direction remains the same, but we were unable to implement some advanced features such as automatic data cleansing from the police department's official database. As a result, our data is somewhat static and we cannot import new data reported by the police department automatically as time goes on. This is different from what we initially expected when we designed the project. Additionally, we did not apply AI to predict safety levels. We use a simple calculation instead of AI to define safety level now.

## Application achieved or failed to achieve regarding its usefulness.

>   Our program aims to build a map for students and faculties in UIUC to check crimes around and on campus. Our project will help people avoid meeting crime and have a safer campus life. This is useful especially for those who like going home late at night.
>
>   ...... But we will add some new features like **providing user a way to log crime themselves or log some possible crimes** though they may not happen at last. Besides, we will add a feature that we can **see a criterion called ‘safe level’ for every street**. The safer it is, the greener it will be on the map. In our system, user can also **select the information they want to see by themselves**. We will provide UI and let them select information easily through clicking their mouse.

The majority of the usefulness of our system has been achieved. For example, we have created an interface that allows users to log crimes themselves and check the safety level of each street. Additionally, users can select the information they want to see. We are convinced that our project's current functionalities can help users avoid crime and have a safer campus life.

##  Schema or source of the data for your application

We did not change the schema or data source. The schema is what we designed in stage 2, and the data source is from the police department. However, we performed some cleaning processes on the data, so it is significantly different from the original data.

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
2. A time-based version of the map, in which safety level will be calculated base on crimes in different time slots of a day (simple feature, view of database)
3. Users can find a safe and fast balanced path from the source to the destination
4. Display of emergency devices
5. Predict where crime is most likely to occur based on the data and artificial intelligence
6. Alert of area

Reason:
1. We design icon for each crime type to make the app more easy to use
2. Implement Search to let user quickly get the crime information they want
3. Add a function of updating to correct some misinformation
4. Removing those functions because they are not quite related to the database and really time consuming to implement

## Advanced Database Program:
1. We design a trigger in the Crime, making it possible once a crime data inserted in the table the database program can automatically change the crime frequency, and crime number of a street.
2. We design a stored procedure to update the Crime trend in a street.
3. We also have some advanced queries to discover the top 20 most dangerous streets in UIUC.