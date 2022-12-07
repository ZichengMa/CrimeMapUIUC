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

## Other things that changed in Final Application Compared with Original Proposal
1. Instead of giving a safety level based on time slots of a day, we made the safety level be updated according to frequency in each single week.
2. We didn't add the feature to automatically detect and delete redundant reports for a single crime, since it involves NLP which takes too much time to implement.
3. Display of emergency devices is not implemented, but given that google map is integrated in our website, users should be able to search for them manually on our website.
4. Instead of making it a single paged website with interactive tables, we separate the features into several pages with a navigation bar.

## Future Work to Improve on
1. A better auto-update of crime data. 

Most of our website's crime data is loaded manually from crime statistics provided by official websites each month, it will be helpful to have this process done automatically.

2. The analyzation of safety level and trend of a street is a little bit vague, it will be much more helpful to our users if we combine crime frequencies with the level of dangerous of that crimes to provide a report of a street.

3. Put our website online

Given that the virtual machine we built on google cloud platform was incapable of acting as a website server, we hold our website locally for the demos, but we can run it online if a server is provided.

## Final division of label and teamwork

Overall we distributed our teamwork in a equalized way, each of the team member will gets his own task for each stage, and we combine our work together in the end of each stage.

The major parts of our label division are listed below:

1. Zhirong Chen:
    * Embedding Google Map UI
    * Writing triggers for the database
    * Setting up tables in the database
    * Generalizing user infomation for tables
    * Setting up the client and server side of our website
    * CSS design
    * Designing table relations
2. Erkai Yu:
    * Writing advanced queries for the database
    * Adding update supports to the database with stored procedures
    * Adding labels to crime data
    * Setting up GCP SQL server
    * CSS design
    * Designing table relations
3. Zicheng Ma:
    * Loading and cleaning crime data to fit database design, with Python
    * Setting up website
    * CSS design
    * Designing table relations
4. Elijah Ye:
    * CSS design
    * Designing table relations