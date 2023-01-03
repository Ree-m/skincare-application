
const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("express-async-errors")
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override"); //lets us use put and delete by using html forms and setting the action=put/delete
const flash = require("express-flash");//if password is short,email is invalid,or not confirmed,flash gives us an error message
const logger = require("morgan");//morgan is a logger,it console.logs all the events that are happening
const connectDB = require("./config/database.js");
var cors = require("cors");


const mainRouter = require('./routers/main');
// const adminRouter= require('./routers/admin');
const itemRouter= require('./routers/item');
// const cartRouter= require('./routers/cart');






// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


// Passport config
require("./config/passport");

//Connect To Database
connectDB();

//Using EJS for views
// app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing,get data from req.body

// router.use(bodyParser.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method")); //if any form has action with _method, what comes after that overrides the method='POST'

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store:  MongoStore.create({ mongoUrl: process.env.DB_STRING ,}),
  })
);


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening


app.use("/main",mainRouter);
// app.use("/admin",adminRouter);
// app.use("/cart",cartRouter);
app.use("/items",itemRouter);












//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});








