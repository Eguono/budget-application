# Budget Analysis

## Introduction
*  **`Budget Analysis`** is an Express Js Powered Budget Analyzing App.
*  It has the following features;
  *  Login with Email and Password
  *  Allows users to;
    *  Make Budget
    *  Record Expenses
    *  View Expenses
    *  View Budget Analysis

## Dependencies

### Back End Dependencies
*  This app's functionality depends on some Node packages including;
  *  **[Express Js](https://www.djangoproject.com/)** - This framework helps is essential in the creation of  object relational models and it also handles routing on the back end.
  
## Front End Dependencies
*  **[Bootstrap CSS](http://getbootstrap.com/)** - The app's grid layout have been styled using this CSS framework

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    >`git clone git@github.com:kingisaac95/bc-19-budget-analysis-application.git`

  *  Using HTTP;

    >`https://github.com/kingisaac95/bc-19-budget-analysis-application.git`

*  Navigate to the repo's folder on your computer
  *  `cd bc-19-budget-analysis-application/`
*  Install the app's dependencies. For best results, using a node package manager.
  *  `npm install`
*  Create a firebase project in your firebase console and copy the configuration and keys.
*  Navigate to `.example.env` and put the details in there and rename the file to `.env`

    >In order to use app dependencies, you need to install it through **npm**. You also need to have **node** installed on your system.

* Run the app
  *  `npm start`
  *  Running the command above will produce output that's similar to the sample below.

  ```
    PS C:\projects\bc-19-budget-analysis-application> npm start
    > bc-19-budget-analysis-application@1.0.0 start C:\projects\bc-19-budget-analysis-application
    > nodemon server.js

    [nodemon] 1.11.0
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node server.js`
    Server running on 4000
  ```
  * Open a browser and goto `localhost:4000`
