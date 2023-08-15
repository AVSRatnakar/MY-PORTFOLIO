const nodemailer = require('nodemailer');

async function sendEmail(emailData) {
  // Create a transporter using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail'
    port : 465,
    secure : true,
    logger : true,
    debug : true,
    secureConnection : false,
    auth: {
      user: process.env.FROM,
      pass: process.env.PASS
    },
    tls : {
        rejectUnauthorized : true,
    }
  });

  // Email content and configuration
  let mailOptions = {
    from: process.env.FROM,
    to: emailData.to,
    subject: process.env.SUBJECT,
    text: process.env.TEXT,
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (err) {
    console.error('Error sending email:', err);
    return false;
  }
}

module.exports = sendEmail;