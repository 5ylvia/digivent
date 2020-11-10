# Digivent


### Description

We are tasked to create a Sharing application that is intuitive to use and displays data from an API in an easily understandable representation. The idea is to make it easier for speakers and attendees of events to communicate with each other over the platform.

So we are creating Digivent - An interface which allows speakers to create events and attendees to discover them. And for an open question and answer forum.

Using a full strategic planning and development process that is managed using agile methodologies we will create a functioning sharing app to be delivered to the client - An Event Management Company.


## Prerequisites

A. Set MongoDB

B. Install Frontend files

C. Install Backend files


## Installation

#### A. Set MongoDB
>1. Create database as Event-platform on mongo DB
>2. Find mongoDB folder and add those json files to mongoDB as events, users, speakers, questions.
```
Event-platform
|- events
|- users
|- speakers
|- questions
```
#### B. Install Frontend files
1. To install
>* Create .env file on digivent-frontend folder, add this :
>```
>VUE_APP_API_URL=http://127.0.0.1:3000/
>```
>* Install npm packages
>```
>npm i
>(npm install)
>```

3. To start
```
npm start
npm run start
```

#### C. Install Backend files
1. To install
>* Create an .env file on digivent-backend folder, add your Atlas connection URL:
>```
>MONGODB_URI=<YOUR_CONNECTION_URL>
>```
>* Install npm packages
>```
>npm i
>(npm install)
>```

2. To start
```
npm run serve
```

## Contributors
Sylvia - https://github.com/5ylvia/digivent

Jesse - https://github.com/JesseSaunders/digivent

Himanshu - https://github.com/himanshu745/digivent

Matthew - https://github.com/mvaughanie/digivent

