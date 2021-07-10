// <div>

// "{this.getGreeting()}{" "}
// {this.getGuestNameById(this.state.newMessage.guestId)} and welcome
// to
// {this.getCompanyById(this.state.newMessage.companyId)}! Room
// number {" "}
// {this.getRoomNumberByGuestId(this.state.newMessage.guestId)} is
// now ready you. Enjoy your stay, and let us know if you need
// anything."
// </div>






















#replacePlaceHolder.js
//
module.exports = function (string, placeHolder, value) {

  var a = string.substring(0, string.indexOf(placeHolder)); //Substring before the placeHolder
  var b = string.substring(string.indexOf(placeHolder) + placeHolder.length, string.length);  //Substring after the placeHolder

  return a + value + b;
}

#sendText.js
//sends text with Twilio
// Twilio Credentials
var accountSid = 'AC3a3f24027892dff7b5a15769f6028eb6';
var authToken = 'a0a65115f197000b6f9bb5d33af64c03';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports = function(message, phoneNumber){

  //Send text with following details:
  client.messages.create({
      to: phoneNumber,
      from: "+12144999437",
      body: message,
  }, function(err, errorText) {
    if(err) {
        console.log(errorText.sid);  //Log Error, if any.
    }
  });
}

#fillTemplate.js
//replaces placeholders using replacePlaceholder.js and getGreeting.js
var replacePlaceHolder = require('./replacePlaceHolder');

module.exports = function(template, greeting, hotel, guest, room) {

  //Replace each place holder
  
  return template; //Returns template with placeholders replaced by values.
}


#index.js
var generateMessage = require('./generateMessage'); // Parameters: templateID, guestID, hotelID
var fs = require('fs'); //Read data from files
var readline = require('readline');   //Read input from console
var sendText = require('./sendText');

//Used to read input from the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Get lists of Available Templates, Guests and Hotels
var templateList = JSON.parse(fs.readFileSync('./data/templates.json'));
var guestsList = JSON.parse(fs.readFileSync('./data/Guests.json'));
var hotelsList = JSON.parse(fs.readFileSync('./data/Companies.json'));
var phoneNumber = JSON.parse(fs.readFileSync('./data/phoneNumber.json')).phoneNumber;

logTemplates(templateList);
rl.question('Enter a choice for Template (1, 2 or 3) : ', function(templateID) {
  console.log(" ");
  logGuests(guestsList);
  rl.question('Enter a choice for Guest (1, 2, 3, 4, 5 or 6) : ', function(guestID){
    console.log(" ");
    logHotels(hotelsList);
    rl.question('Enter a choice for Hotel (1, 2, 3, 4 or 5) : ', function(hotelID){
      console.log(" ");
      console.log("Your message: ");
      console.log(generateMessage(templateID, guestID, hotelID)); //Generate message
      sendText(generateMessage(templateID, guestID, hotelID), phoneNumber); //Send Text through Twilio
    });
  });
});

//Print choices of Templates to the console.
function logTemplates(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a Template: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + "Example: " + list[i].sample);
  }
}

//Print choices of Hotels to the console.
function logHotels(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a Hotel: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].company);
  }
}

//Print choices of Guests to the console.
function logGuests(list){
  console.log(" ");
  console.log(" ");
  console.log('Pick a guest: ');
  console.log(" ");
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].id + "  " + list[i].firstName + " " + list[i].lastName);
  }
}

#getGreeting.js
var dateTime = require('node-datetime');  //Need for Greeting

module.exports = function (){

  var dt = dateTime.create();
  //Generate Current time
  var currentHour = dt.format('H');

  //Generate greeting according to current time
  if((currentHour >= 0 && currentHour <= 3) || (currentHour >= 18)) {
    greeting = "Good evening";
  }
  else if(currentHour >= 4 && currentHour <= 11) {
    greeting = "Good morning";
  }
  else if(currentHour >=12 && currentHour <= 17) {
    greeting = "Good afteroon";
  }

  return greeting;
}

#generateMessage.js
var fs = require('fs');
var fillTemplate = require('./fillTemplate');
var getGreeting = require('./getGreeting');
module.exports = function(templateID, guestID, hotelID) {

  var greeting = getGreeting(); //Pick a greeting
  var hotel = JSON.parse(fs.readFileSync('./data/Companies.json'))[hotelID - 1].company;  //Get Hotel Name from ID
  var guest = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].firstName;  //Get Guest Name from ID
  var template = JSON.parse(fs.readFileSync('./data/templates.json'))[templateID - 1].body;  //Get Template from ID
  var room = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].reservation.roomNumber;  //Get Room number from Guest details
  var timeZone = JSON.parse(fs.readFileSync('./data/Guests.json')) [hotelID - 1].timeZone; //Get TimeZone from Hotel details

  return fillTemplate(template, greeting, hotel, guest, room);

}







#package.json
{
  "name": "MessageGenerator",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "node-datetime": "^2.0.0",
    "string-format": "^0.5.0",
    "twilio": "^3.6.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "Rahul Sonwalkar",
  "license": "ISC"
}


##README
Getting started

Clone or download the repo.

$ git clone https://github.com/rahulsonwalkar/MessageGenerator
Navigate into the directory and install the dependencies.

$ cd MessageGenerator
$ npm install
Usage

$ npm start
Note: If you are running the code using Git-bash on a windows machine, use node index.js instead of npm start.

Changing phone number for texting

Change the phone number in /data/phoneNumber.json to the number on which you want to receieve texts.

{
    "phoneNumber" : "+15038067016"
}
Design

The program is broken down into various modules. Each modules consists of a function that serves a portion of the main task (generating and sending welcome text message).

index.js is the entry point for the program. It takes user input from the terminal (type of template, guest and hotel) and sends over the data to generateMessage.js to generate the message.

generateMessage.js loads the required data from data files and replaces placeholders in templates using fillTemplate.js.

fillTemplate.js replaces individual placeholders using replacePlaceHolder.js and generates a proper greeting, depending on the current time using getGreeting.js.

Lastly, sendText.js deals with Twilio's API. It accepts a generated text message from generateMessage.js and a phone number. The phone number is retrieved from phoneNumber.json in /data folder.

What's next?

Implement proper error-handling (throw exceptions for edge-cases) and implement input validation for inputs from the terminal.

Make it possible to add data to data files, for example: add new templates, guests, hotels.


##API DOCUMENTATION
MessageGenerator API

API to generate welcome text-messages for your hotel guests.

API implementation of the Message Generator Project

How it works:

Send POST requests to https://vast-brook-82312.herokuapp.com/getMessage

The body of the request should contain this object:

form: {
      'guest': 3,                //1, 2, 3, 4, 5, or 6
      'hotel': 2,                //1, 2, 3, 4, or 5
      'template' : 2,            //1, 2 or 3
      'phone' : '+15038038316'   //Your phone number
    }
Response body: "Good afternoon Bridgett, I'm Sandy, Manager for The Grand Budapest Hotel. 
We are delighted to have you as our guest. You will be staying in room number 127"
This triggers the API to do three things:

Generate a text message using details in the POST request. (Example : Good afternoon Bridgett, I'm Sandy, Manager for The Grand Budapest Hotel. We are delighted to have you as our guest. You will be staying in room number 127.)

Send the generated text message to the phone number provided in the body of the form object.

Send the generated message as a response to the HTTP request.

Guests:

1 for Candy Pace
2 for Morgan Porter
3 for Bridgett Richard
4 for Melissa Perston
5 for Latoya Herrera
6 for Hewitt Hopper
Hotels :

1 for Hotel California
2 for The Grand Budapest Hotel
3 for The Heartbreak Hotel
4 for The Prancing Pony
5 for The Fawlty Towers
Templates :

1 for a message like "Good evening Samantha, welcome to Hotel Panda Express. Your room number 127, have a great stay."
    
2 for a message like "Good afternoon Maggie, I'm Sandy, Manager for Hotel Panda Express. We are delighted to have you as our guest. You will be staying in room number 127."
   
3 for a message like "Welcome to Hotel Panda Express! Good afternoon Jacob, your room number is 127. Have a wonderful stay with us!" 

Sample Node.js code to send POST requests :

var request = require('request');

// Set the headers
var headers = {
}

// Configure the request
var options = {
    url: 'https://vast-brook-82312.herokuapp.com/getMessage',
    method: 'POST',
    headers: headers,
    form: {
      'guest': 3,
      'hotel': 2,
      'template' : 2,
      'phone' : '+15038038316'
    }
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
})

Note: If you are using the sample node.js code to send POST requests, install this dependency first: npm install request



###DROPDOWN
<span className={this.props.classes.dropdown}>County:  </span>
                            <FormControl >
                                <Select
                                    native
                                    className={this.props.classes.dropdownItem}
                                    value={org.county_id}
                                    onChange={(event) => this.handleChangeFor(event, 'county_id')}>
                                    {this.props.reduxStore.counties.map(county =>
                                        <option value={county.county_id} className={this.props.classes.dropdownMenu}>{county.county_name}</option>
                                    )}
                                </Select>
                            </FormControl>

<span className={}>Select Template: </span>
                            <form>
                                <select
                                value={}
                                onChange={(event) => this.handleChangeFor(event, 'template_id')}>
                                {this.props.store.templates.map(template =>
                                    <option value={template.id}>{template.id}</option>)}
                            </form>



##NORMALIZE PHONE NUMBER
const normalizePhone = value => {
    if (!value) return value
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) return onlyNums
    if (onlyNums.length <= 7)
        return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)} ${onlyNums.slice(
        6,
        10
    )}`
}
//_______________________________________________________________











NewOrganization.js
//state is set
state = {
        newEntry: {
            county_id: ''
        },
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            newEntry: {
                ...this.state.newEntry,
                [propertyName]: event.target.value
            }
        })
    }
    handleClick = async (event) => {
        event.preventDefault()
        try {
            await this.props.dispatch({
                type: 'POST_NEW_ORGANIZATION',
                payload: this.state.newEntry
            })
            alert('Organization added!')

            this.props.history.push('/organizationsListPage')
        } catch {
        }
    }

    Render() {
        let org = this.state.newEntry
        return(
<>
                            <!-- <br></br>
                            <span className={this.props.classes.dropdown}>County:  </span>
                            <FormControl >
                                <Select
                                    native
                                    className={this.props.classes.dropdownItem}
                                    value={org.county_id}
                                    onChange={(event) => this.handleChangeFor(event, 'county_id')}>
                                    {this.props.reduxStore.counties.map(county =>
                                        <option value={county.county_id} className={this.props.classes.dropdownMenu}>{county.county_name}</option>
                                    )}
                                </Select>
                            </FormControl>
                            <br />
                            </> -->
        <!-- )
    } -->

                        <Button className={this.props.classes.submitButton}
                        onClick={this.handleClick}
                        size={'large'}
                        variant={'outlined'}>
                        Add
                    </Button>

                    ________________________
                    SAGA
                    import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';

function* newOrganizationSaga() {
    yield takeEvery('POST_NEW_ORGANIZATION', postNewOrganization)
}

function* postNewOrganization(action) {
    try {
        yield axios.post(`/api/organizations`, action.payload)
        yield put ({type: 'UPDATE_ORGANIZATIONS', payload: response.data })
        
    } catch (error) {
    }
}

export default newOrganizationSaga

____________________________
******ROUTER***** this is the magic

const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT "organizations".id, "organizations".org_name, "organizations".logo, 
                        "organizations".url, "organizations".type, "organizations".address_number, 
                        "organizations".address_street, "organizations".address_unit, "organizations".city, 
                        "organizations".state, "organizations".zip, "organizations".notes, 
                        "counties".county_id, "counties".county_name, "demographics_age"."0_3" AS "age_0_3", 
                        "demographics_age"."4_7" AS "age_4_7", "demographics_age"."8_12" AS "age_8_12", "demographics_age"."13_18" AS "age_13_18", 
                        "demographics_race".white, "demographics_race".black_or_african_american, 
                        "demographics_race".american_indian_or_alaska_native, "demographics_race".asian, 
                        "demographics_race".native_hawaiian_or_pacific_islander, "demographics_poverty"."percentage_NSLP"
                        FROM "organizations"
                        JOIN "counties" ON "counties".county_id = "organizations".county_id  
                        JOIN "demographics_age" ON "demographics_age".organizations_id = "organizations".id
                        JOIN "demographics_race" ON "demographics_race".organizations_id = "organizations".id
                        JOIN "demographics_poverty" on "demographics_poverty".organizations_id = "organizations".id
                        ORDER BY "organizations".org_name;`

    console.log('in organizations router.get', req.body)
    pool.query(queryText)
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('error in organizations GET', error)
            res.sendStatus(500);
        })
})

//Route setup for edit to multiple tables from 'add new organization form'

router.post('/', rejectUnauthenticated, async (req, res) => {
    const newEntry = req.body;

    console.log(newEntry);

    const connection = await pool.connect()
    try {
        await connection.query('BEGIN');
        const sqlAddOrganization = `INSERT INTO "organizations" 
                                    ("org_name", "logo", "url", "type", "address_number", "address_street", 
                                    "address_unit", "city", "state", "county_id", "zip", "notes") 
                                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
                                    RETURNING id`;
        const organizationQueryValues = [
            newEntry.name,
            newEntry.logo,
            newEntry.url,
            newEntry.type,
            newEntry.address_number,
            newEntry.address_street,
            newEntry.address_unit,
            newEntry.city,
            newEntry.state,
            newEntry.county_id,
            newEntry.zip,
            newEntry.notes
        ];
        // Save the result so we can get the returned value
        const result = await connection.query(sqlAddOrganization, organizationQueryValues);
        // Get the id from the result - will have 1 row with the id 
        const organizationsId = result.rows[0].id;

        const sqlAddContact = `INSERT INTO "contacts" 
                                ("contact_name", "title", "organizations_id", "phone_number",
                                "phone_number_type", "email", "notes")
                                VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const contactQueryValues = [
            newEntry.contact_name,
            newEntry.title,
            organizationsId,
            newEntry.phone_number,
            newEntry.phone_number_type,
            newEntry.email,
            newEntry.notes
        ]
        await connection.query(sqlAddContact, contactQueryValues);

        const sqlAddAgeDemographics = `INSERT INTO "demographics_age"
                                    ("organizations_id", "0_3", "4_7", "8_12", "13_18")
                                    VALUES ($1, $2, $3, $4, $5)`;
        const demQueryValues = [
            organizationsId,
            newEntry.demographics_age_0_3,
            newEntry.demographics_age_4_7,
            newEntry.demographics_age_8_12,
            newEntry.demographics_age_13_18
        ]
        await connection.query(sqlAddAgeDemographics, demQueryValues);

        const sqlAddRaceDemographics = `INSERT INTO "demographics_race"
                                    ("organizations_id", "white", "black_or_african_american", 
                                    "american_indian_or_alaska_native", "asian", 
                                    "native_hawaiian_or_pacific_islander")
                                    VALUES ($1, $2, $3, $4, $5, $6)`;
        const demRaceQueryValues = [
            organizationsId,
            newEntry.demographics_race_white,
            newEntry.demographics_race_black,
            newEntry.demographics_race_native,
            newEntry.demographics_race_asian,
            newEntry.demographics_race_pacific
        ]
        await connection.query(sqlAddRaceDemographics, demRaceQueryValues);

        const sqlAddPovertyDemographics = `INSERT INTO "demographics_poverty"
                                            ("organizations_id", "percentage_NSLP")
                                            VALUES ($1, $2)`;
        const povertyQueryValues = [
            organizationsId,
            newEntry.demographics_poverty
        ]
        await connection.query(sqlAddPovertyDemographics, povertyQueryValues)

        await connection.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log(`Transaction Error - Rolling back new account`, error);
        res.sendStatus(500);
    } finally {
        connection.release()
    }

});


router.put('/', rejectUnauthenticated, async (req, res) => {
    const newEntry = req.body;

    const connection = await pool.connect()

    try {
        await connection.query('BEGIN');
        console.log('ready to edit organization with', req.body)

        const organizationQueryValues = [
            newEntry.address.logo,
            newEntry.address.url,
            newEntry.address.address_number,
            newEntry.address.address_street,
            newEntry.address.address_unit,
            newEntry.address.city,
            newEntry.address.state,
            newEntry.address.zip,
            newEntry.address.county_id,
            newEntry.address.notes,
            newEntry.address.id,
        ]

        let editOrganizationQuery = `UPDATE "organizations" 
                SET "logo" = $1,
                    "url" = $2,
                    "address_number" = $3, 
                    "address_street" = $4, 
                    "address_unit" = $5,
                    "city" = $6, 
                    "state" = $7, 
                    "zip" = $8, 
                    "county_id" = $9, 
                    "notes" = $10 
                    WHERE "id" = $11
                    RETURNING "id";`;

        const result = await connection.query(editOrganizationQuery, organizationQueryValues);
        // Get the id from the result - will have 1 row with the id 
        const organizationsId = result.rows[0].id;

        const sqlAgeDems = `UPDATE "demographics_age"
                SET "0_3" = $1,
                    "4_7" = $2,
                    "8_12" = $3,
                    "13_18" = $4
                WHERE "organizations_id" = $5;`

        const demographicsAgeQueryValues = [
            newEntry.demographics.age_0_3,
            newEntry.demographics.age_4_7,
            newEntry.demographics.age_8_12,
            newEntry.demographics.age_13_18,
            organizationsId
        ]

        await connection.query(sqlAgeDems, demographicsAgeQueryValues);

        const sqlRaceDems = `UPDATE "demographics_race"
                SET "white" = $1,
                    "black_or_african_american" = $2,
                    "american_indian_or_alaska_native" = $3,
                    "asian" = $4,
                    "native_hawaiian_or_pacific_islander" = $5
                WHERE "organizations_id" = $6;`

        const demographicsRaceQueryValues = [
            newEntry.demographics.white,
            newEntry.demographics.black_or_african_american,
            newEntry.demographics.american_indian_or_alaska_native,
            newEntry.demographics.asian,
            newEntry.demographics.native_hawaiian_or_pacific_islander,
            organizationsId

        ]

        await connection.query(sqlRaceDems, demographicsRaceQueryValues);

        const sqlPovertyDems = `UPDATE "demographics_poverty"
                SET "percentage_NSLP" = $1
                WHERE "organizations_id" = $2
            `
        const demographicsPovertyQueryValues = [
            newEntry.demographics.percentage_NSLP,
            organizationsId
        ]

        await connection.query(sqlPovertyDems, demographicsPovertyQueryValues)

        await connection.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        await connection.query('ROLLBACK');
        console.log(`Transaction Error - Rolling back new account`, error);
        res.sendStatus(500);
    } finally {
        connection.release()
    }

});
module.exports = router;





<!-- return () {
    <div>
      <SomeComponent key={`some-${someVariable}`} />
      <AnotherComponent />
    </div>
} -->

time stamp
    const unix_timestamp = 1486832543;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unix_timestamp * 1000);
    // // Hours part from the timestamp
    // const hours = date.getHours();
    // // Minutes part from the timestamp
    // const minutes = "0" + date.getMinutes();
    // // Seconds part from the timestamp
    // const seconds = "0" + date.getSeconds();

    // // Will display time in 10:30:23 format
    // const formattedTime =
    //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    // console.log(formattedTime);
    const momentFormattedTime = moment(date).format('L');
    console.log(momentFormattedTime)