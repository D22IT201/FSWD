"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'd22it201@charusat.edu.in',
    pass: 'aqzfosywmfdotmzp'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "d22it201@charusat.edu.in", // sender address
    to: "d22it212@charusat.edu.in", // list of receivers
    subject: "NodeMailer mail", // Subject line
    text: "Hello Prachi, how are you? ", // plain text body
 
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);