/**
 * Created by PhuongND on 20/04/2016.
 */
var database     =   require('/BookStore/conn/connect_database');
var db = database.connectDatabase();
var bookScheme     =   require('/BookStore/conn/scheme/book');

var bookManagement     =   require('../management');

//var response = {};
function getListBook(callback) {
    bookManagement.listObj(bookScheme,callback)
}

function addBook(newBook,callback){
    var book = new bookScheme();
    //var book = {
        book.name = newBook.name,
        book.author = newBook.author
        //author: param.author
/*        price: param.price,
        dienthoai: param.dienthoai,
        cover: param.cover,
        view: param.view,
        description: param.description,
        status: param.status*/
    //};
    bookManagement.saveObj(book,callback);
}


exports.getListBook=getListBook;
exports.addBook=addBook;
