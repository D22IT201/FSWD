// const nodemailer = require('nodemailer');

// // Step 2: Set up the transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'd22it201@charusat.edu.in',
//     pass: 'Hitu0503@',
//   },
// });

// // Step 3: Compose the email
// const mailOptions = {
//   from: 'd22it201@charusat.edu.in',
//   to: 'devamjoshi8@gmail.com',
//   subject: 'Test Email with Attachment',
//   text: 'This is a test email with an attachment sent using Nodemailer.try karu chu thai k nai',
//   attachments: [
//     {
//       filename: 'example.txt',
//       content: 'Hello, this is an example attachment!',
//     },
//   ],
// };

// // Step 5: Send the email
// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log('Error sending email:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });
"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 3000,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
    pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
