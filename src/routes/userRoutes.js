const express = require('express');
const userRouter = express.Router();

const clientController = require('../controller/clientController');

//CRUD routes for Users
userRouter.route('/').get(clientController.index).post(clientController.sendMail);
userRouter.route('/:id').get(clientController.find).patch(clientController.update).delete(clientController.remove);


module.exports = userRouter;