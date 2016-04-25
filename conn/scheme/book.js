/**
 * Created by PhuongND on 20/04/2016.
 */

var mongoose = require("mongoose");
var Schema       = mongoose.Schema;

var book = new Schema({
    id:Number,
    name: String,
    author:String,
    price: Number,
    cover: String,
    view: Number,
    description: String,
    status : Boolean,
    chapters_id: [Number]
},{collection : 'book'});
var book = mongoose.model('book', book);
module.exports = book;
