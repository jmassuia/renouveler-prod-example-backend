const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Routers
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');

const log = console.log;

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const app = express();
var port = 3333;

app.use(cors({origin:'*'}));



//Setting up the server-side view engine
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "public","templates"));

// Loading static images into server
app.use(express.static(path.resolve(__dirname, "public")));


app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

// Setting up the api routes
app.use('/',userRouter);
app.use('/views/email',viewRouter);


app.listen(process.env.PORT || port, ()=> log('Server is running / PORT:'+ port));

