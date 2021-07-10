
## QUICK CONNECT HOSPITALITY TEXT SENDER
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).
## Description

Quick Connect is a web app created to help Hotels connect with customers in a personal way.

To see the fully functional site, please visit:

************ https://the-free-book-buggie.herokuapp.com/
Before you get started, make sure you have the following software installed on your computer:

## Screenshots
![Alt text](/Assets/Screen-Shot-Login.png "Login")

![Alt text](/Assets/Screen-Shot-Home.png "Home")

## Usage
Login to begin (the default username and password for development is: username: admin password: 1234.

To register a new user, click on sign up. The flow could look like: select 'Add a Guest' from the side menu, fill in the form to add the guest (maybe you for a fun test??). Select 'Add a Hotel' and add your pretend hotel. Follow the steps on the Home page to select the template (currently only one option), guest name, and hotel, (verify message accuracy as the message prints out) and hit the Send Text Message.
Optionally, on log in pick one of the preexisting options in the template/guest name/hotel dropdowns to generate a message.

## Built with
React.js, Redux, Semantic-UI, Chart.js, Axios, Node.js, Express, PG, and PostgreSQL.

## The Future
In future releases some of the features I'd like to roll out would be the ability to add custom Templating with handlebar variable support, updating/deleting template/guests/hotels from the database, and automating phone number field validation/formatting.


## Development Setup Instructions
Before getting started, make sure you have the following software installed on your computer: Node.js PostgreSQL Nodemon Create a new database named quick_connect. Run the queries that are stored in the database.sql file to populate the tables and insert the values you’ll need. The project is built on Postgres so you will need to make sure to have that installed. Postico is recommended for running the queries. In your terminal navigate to this project and run npm install to install all of the necessary dependencies. Run npm run server to start the server Run npm run client to start the server and open a new browser window.

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

- Run `npm install`

- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

- Start postgres if not running already by using `brew services start postgresql`

- Run `npm run server`

- Run `npm run client`

- Navigate to `localhost:3000`


## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

