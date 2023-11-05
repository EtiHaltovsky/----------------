const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
      user: 'et3252760@gmail.com',
      pass: '0583880220'
    }
  });

  const mailOptions = {
    from: 'et3252760@gmail.com',
    to: 'dvorahal@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is the body of the email'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
// const nodemailer = require('nodemailer');

// // Create a transport object with your email service provider details
// const transporter = nodemailer.createTransport({
//   service: 'your-email-service-provider',
//   auth: {
//     user: 'et3252760@gmail.com',
//     pass: '0583880220'
//   },
// });

// // Define a function to send the email
// const sendEmail = (recipients, subject, body) => {
//   const mailOptions = {
//     from: 'et3252760@gmail.com',
//     to: recipients.join(', '),
//     subject: subject,
//     html: body,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// };

// Example usage
const recipients = ['dvorahal@gmail.com', 'et3252760@gmail.com'];
const subject = 'Hello from Node.js!';
const body = '<h1>Hello!</h1><p>This is the content of the email.</p>';

sendEmail(recipients, subject, body);
