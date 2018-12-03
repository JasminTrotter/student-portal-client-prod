# [Student Portal](https://student-portal-balletbody.herokuapp.com/)

This is the production version application used by [Ballet Body by Jasmin](https://www.balletbodybyjasmin.com).
To view the demo version repo, go to (https://github.com/JasminTrotter/student-portal-client)

## About

A responsive web app where students can purchase classes and view a history of their past purchases. Built with React and Redux. Work in progress. See the live app [here](https://www.balletbodybyjasmin.app).
For a demo, see tbe demo version live app [here](https://student-portal-balletbody.herokuapp.com/).
* username: DemoUser
* password: ballerinasRcool
to test card processing functionality, use card number 4242 4242 4242 4242.

This project was bootstrapped with Create React App. Student Portal's server side code (built with Node.js and MongoDB) can be found in [this repository](https://github.com/JasminTrotter/student-portal-api).

![app screenshot](https://github.com/JasminTrotter/student-portal-client/blob/master/src/styles/assets/studentportalscreen.PNG)

## Introduction
[Ballet Body by Jasmin](https://www.balletbodybyjasmin.com/) is an adult ballet program for absolute beginners. Create an account [here](https://student-portal-balletbody.herokuapp.com/signup) to purchase a class or a package of multiple classes. You will also be able to view a history of your purchases on your dashboard. See you in class!

Desktop and mobile view of app

## Technology
### Front End
- React.js
- Redux
- CSS Modules
- Continuous integration and deployment with Travis CI
- Testing with Enzyme is in progress

### Back End
- View server code [this repository](https://github.com/JasminTrotter/student-portal-api).
- Node.js + Express.js (web server)
- MongoDB (database)
- JSON Web Tokens (user authentication)
- Testing with Mocha is in progress
- Stripe API for payment processing

## Future Features
- User can view history of attendances and see how many classes are left in their current package.
- Integrate features of [Join Class](https://join-class.herokuapp.com/) (click [here](https://github.com/JasminTrotter/Join-Class-App) for repo) so students can take care of scheduling and payment all in one app.
