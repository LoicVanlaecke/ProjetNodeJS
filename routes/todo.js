module.exports = {
    all: function (req, res) {
        res.send('All todos')
    }
    , viewOne: function (req, res) {
        console.log('Viewing ' + req.params.id);
    }
    , create: function (req, res) {
        console.log('Todo created')
    }
    , destroy: function (req, res) {
        console.log('Todo deleted')
    }
    , edit: function (req, res) {
        console.log('Todo ' + req.params.id + ' updated')
    }
};
var mongoose = require('mongoose')
    , Todo = mongoose.model('Todo');
module.exports = {
    all: function (req, res) {
        Todo.find({}, function (err, todos) {
            if (err) res.send(err);
            res.json(todos);
        })
    }
}