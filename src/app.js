/*+++++++++++++++ Requieres ++++++++++++++++++*/

//Express
const express = require('express');
const app = express();

//Path
const path = require('path');

//Method-override
const methodOverride = require('method-override');

//Morgan
const morgan = require('morgan');

//Session
const session = require('express-session');

//Cookie Parser
const cookieParser = require('cookie-parser');

//accountRememberer
const accountRememberer = require(path.join(__dirname, '/middlewares/accountRememberer.js'));

//Main Router
const mainRouter = require(path.join(__dirname, '/routes/mainRouter.js'));


/*++++++++ Server Port ++++++++*/
const port = 3030;

/*++++++++ Server Startup Message ++++++++*/
const startupMessage = "Server Status: Online\nUrl: http://localhost:"+port+"/";

/*++++++++ Static Resources ++++++++*/
app.use(express.static("public"));

/*+++++++++++++Middleware´s (Don´t touch) ++++++++++++++*/
    /*For Json*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
    /*For Storage*/
app.use(morgan("dev"));

    /*For PUT & DELETE */
app.use(methodOverride("_method"));

    /*For Session*/
app.use(session(
    {
        secret : 'secret',
        resave: true,
        saveUninitialized: true
    }));
    
    /*For Cookies*/
app.use(cookieParser());

//For cookie "rememberMe" analyzation 
app.use(accountRememberer);

// For View Engine
app.set("view engine", "ejs");

/*++++++++++++++++++ Startup (Don´t touch) ++++++++++++++++++++*/
app.listen(process.env.PORT || port, () => {
    console.log(startupMessage);
});

/*++++++++ Main Router - invocation ++++++++*/
app.use('/', mainRouter);




