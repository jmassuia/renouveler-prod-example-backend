const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      type:"OAuth2",
      user: "massuia1507@gmail.com",
      clientId:process.env.GMAIL_CLIENT_ID,
      clientSecret:process.env.GMAIL_CLIENT_SECRET,
      refreshToken:process.env.GMAIL_REFRESH_TOKEN,
      accessToken:process.env.GMAIL_ACCESS_TOKEN,
      expires: 2500
  }
});

const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: './backend/src',
      layoutsDir: './src/templates',
      defaultLayout: 'index.handlebars',
    },
    viewPath: './src/templates/',
    extName: '.handlebars',
  };

transporter.use('compile',hbs(handlebarOptions));

module.exports = transporter;


