const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const log = console.log;

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
var port = 3333;

app.use(cors({origin:'*'}));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || port, ()=> log('Server is running / PORT:'+ port));

