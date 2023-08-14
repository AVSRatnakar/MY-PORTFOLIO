const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sendEmail = require('./response-mail'); // Import the sendEmail function
const receiveMail = require('./feedback-mail'); // Import the receiveMail function
const app = express();

require('dotenv').config

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('../public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the email sender!');
});

// Endpoint to send an email
app.post('/send-email', async (req, res) => {

  const emailData = req.body
  
  const feedbackmail = await receiveMail(emailData);
  if (feedbackmail) {
    console.log("Email sent successfully")
  } else {
    console.log("Failed to sent feedback mail.")
  }

  const emailSent = await sendEmail(emailData);
  if (emailSent) {
    res.send("Thank for your feedback")
  } else {
    res.send('Failed to submit form.')
  }
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;