/**
 * Created by PhuongND on 20/04/2016.
 */

var book_models = require('/BookStore/models/api/v1/book_models');

var main_url = "/api/book/v1";

function goBookMangement(router) {
    /*
     **  list all book**
     */
    router.route(main_url + "/list")
        .get(function (req, res) {
            book_models.getListBook(function (success, allInfo) {
                if (success) {
                    res.send('success', allInfo);
                }
                else {
                    res.send('false');
                }
            })
        })

    /*
     **  save book**
     */
    router.route(main_url + "/save")
        .post(function (req, res) {
            var newBook = {
                name: req.body.name,
                author: req.body.author
 /*               price: req.body.price,
                dienthoai: req.body.dienthoai,
                cover: req.body.cover,
                view: req.body.view,
                description: req.body.description,
                status: req.body.status*/
            };

            book_models.addBook(newBook, function (status,callback) {
                if (status) {
                    res.json(callback)
                }
                else {
                    console.log(status);
                }
            })
        })
}
exports.goBookMangement=goBookMangement;

