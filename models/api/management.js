//add new obj
function saveObj(obj,callback) {
    obj.save(function (err, obj) {
        if (err) {
            return callback(false);
        }
        else
        return callback(true, obj);
    })
}

//list all obj
function listObj(obj,callback){
    obj.find({}, function (err, data) {
        if(err){
            return callback(false, []);
        }else{
            return callback(true, data);
        }
    });
}


exports.saveObj=saveObj;
exports.listObj=listObj;

