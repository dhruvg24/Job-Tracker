# Awasar | Job tracking app

Job Tracking App
A web application for tracking and managing jobs using  Express.Js, MongoDB, Passport.Js and EJS.

# Features

Add, update, and delete jobs
View a dashboard of all current jobs and their statuses
Filter and search for jobs by various criteria
Edit your profile
Sign up and log in using Google OAuth and email and password

# Prerequisites

Node.js and npm (comes with Node)
MongoDB

# Installation

Clone this repository

Navigate to the project directory: cd Awasar-Job-Tracker

Install the dependencies: npm install
Create a .env file in the root of the project and set the following variables:

<ul>
  <li> CLIENT_ID: google auth client id </li>
  <li> CLIENT_SECRET: google auth secret </li>
  <li> SECRET: the password for your database </li>
  <li> MONGODB_URI: mongodb cloud uri </li>
</ul>
Run the database migration script to set up the necessary tables: npm run migrate
Start the server: npm start

# Usage

Navigate to http://localhost:3000 in your web browser
Begin adding, updating, and tracking jobs!

# Future Features

- [ ] Add a cron Job to auto delete Jobs older than 30 days.
- [ ] Implement pagination on ``all-jobs`` page.
- [ ] Add a Job Link to the Job model and display it on the Job page.
- [ ] Add a Notes field to the Job model and display it on the Job page.
