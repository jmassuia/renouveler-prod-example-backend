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
      clientId:process.env.GMAIL_CLIENT_ID2/*'521860514801-0dm90f5d4qblga2v37pnrqcsa4hn9r3a.apps.googleusercontent.com'*/,
      clientSecret:process.env.GMAIL_CLIENT_SECRET2/*'SvAfdzJHlQ3z1WitY76wPpGf'*/,
      refreshToken:process.env.GMAIL_REFRESH_TOKEN2/*'1//04rz9RGlxIwFTCgYIARAAGAQSNwF-L9IrUcCciuR6cpEWnFEYQBC-OSIPDvaJQ2aroBdEL-lyFAN5TxAM139GfoWZaHiVUYiW6fU'*/,
      accessToken:process.env.GMAIL_ACCESS_TOKEN2/* 'ya29.Il-9B5f29PQb9BzDkW7mTG3mZR2C_RmAb8iwi_WZHZ7X3hjJ-uX0V4_QkJV1nOzrh9MqlLnIP-hfeLWWaa85fWzovq-SdR_SdkaUWSF-9MJDht2RAG_c0xyAehx8eM02OA'*/,
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


