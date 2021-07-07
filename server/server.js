
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

//Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is a test text message!!',
    from: '+16124284192',
    to: '19524515638'
  })
.then( message => console.log(message))
.catch((err) => console.log(err)) ;


// Route includes
const userRouter = require('./routes/user.router');
const newTemplateRouter = require('./routes/new.template.router');
const allTemplatesRouter = require('./routes/all.templates.router');
const selectedTemplateRouter = require('./routes/selected.template.router');
const allGuestsRouter = require('./routes/all.guests.router');
const allHotelsRouter = require('./routes/all.hotels.router');
const generateMessageRouter = require('./routes/generate.message.router')



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/newTemplate', newTemplateRouter);
app.use('/api/allTemplates', allTemplatesRouter);
app.use('/api/selectedTemplate', selectedTemplateRouter);
app.use('/api/allGuests/', allGuestsRouter);
app.use('/api/allHotels/', allHotelsRouter);
app.use('/api/message', generateMessageRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
