

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