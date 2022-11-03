//import packages and dependecis
const express  = require("express");
const mongooose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

//assigning a port to run the application
const PORT = process.env.PORT || 8070;

//use declare dependencies
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; //import mongoDB connection string from .env file

mongooose.connect(URL, {
    //useCreateIndex: true,
    //useNewUrlParser: true,  
    //useUnifiedTopologyL: true,
    //useFindAndModify: false
});

const connection = mongoose.connection; //assign DB Connection

connection.once("open", () =>{ //open the conncetion
    console.log("### Database Connetion Successful !"); //if connection was sucessfull display a message
})





const employeeRoutes = require('./routes/Employee.route');
app.use('/employees', employeeRoutes);

const timetableRoute = require('./routes/Timetable.route');
app.use('/timetables',timetableRoute);

const noticeRoute = require('./routes/Notice.route');
app.use('/notices',noticeRoute);





app.listen(PORT, () => { //starting to listen the port
    console.log(`### Server is running - Port number ${PORT}`); //display a message with running port number
})

