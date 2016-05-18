var mongoose        = require('mysql');
var User            = require('./model.js');

//Opens App Routes
module.exports = function(app) {

        var query = User.find({});
        query.exec(function(err, users){
                if(err)
                res.send(err);


        res.json(users);
        });
};

app.post('/users', function(req, res){

        var newuser = new User(req.body);

        newuser.save(function(err){
                if(err)
                res.send(err);
        res.json(req.body);
        });
});
