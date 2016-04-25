/**
 * Created by PC on 20/04/2016.
 */
function connectDatabase() {
    var mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost:27017/book_store');

    var db = mongoose.connection;
    db.on('error', function (err) {
        ('connection error', err);
    });
    db.once('open', function () {
        console.log('connected.');
    });
}

module.exports.connectDatabase = connectDatabase;
