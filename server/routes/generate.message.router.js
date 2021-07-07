const { response } = require("express");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//twilio route
router.get('/:id', (req, res) => {
    const newMessage = req.body


  //GET phone number of guest by ID, pass number in query string
    const sqlGetMobile = `SELECT * FROM "guests"
                        WHERE "id"=$1`

    // Save the result to get the returned value
    console.log('in newMessage', result.rows)
    const result = pool.query(sqlGetMobile, [req.params.id]);
    // Get the phone number from the result - will have 1 row with the id 
    
        console.log(textNumber)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in newMessage GET', error)
            res.sendStatus(500);
        })

        const textNumber = result.rows[3].mobile;
    //take returned mobile and hand off to Twilio
    client.messages
    .create({
        body: newMessage,
        to: textNumber,
        from: "+16124284192",
    })
    .then
    (message => res.send(`The message to : ${message.to} was sent!`)
    //   console.log("message body:", req.body)
    )
        
      

});

module.exports = router;




