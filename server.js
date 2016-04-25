/**
 * Created by PhuongND on 20/04/2016.
 */

/**
 *
 */
var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();

/**
 *
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

/*
 **************************INIT CONTROLLERS******************************
 */
var book_controllers = require('./routes/api/book/v1/book_controllers');

/*
 **************************CALL CONTROLLERS******************************
 */
book_controllers.goBookMangement(router);


/*
 **************************START SERVER******************************
 */
app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
