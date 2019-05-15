const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/send-email', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elequinbabymonitor@gmail.com',
      pass: 'elequin.baby.monitor.2019'
    }
  });

  const mailOptions = {
    from: 'elequinbabymonitor@gmail.com',
    // to: 'annie@elequin.io',
    to: 'bbrooklynrider96@gmail.com, annie@elequin.io',
    subject: 'BABY MONITOR',
    text: 'Sounds like the baby might be awake.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Email not sent.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent!');
    }
  });
});

app.listen(port, () =>
  console.log(`Example app listening at: http://localhost:${port}`)
);
