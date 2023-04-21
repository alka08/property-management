
async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'homley4g@gmail.com',
      pass: 'homley4@mail'
    }
  });

  let info = await transporter.sendMail({
    from: 'your_email@gmail.com',
    to: to,
    subject: subject,
    text: text
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = sendEmail;
