const express = require('express');
const routes = express.Router();

const clientController = require('./controller/clientController');

routes.get('/',(req,res)=>{
   return res.json('Application is running!!!');
})

routes.post('/sendMail',clientController.store);

module.exports = routes;