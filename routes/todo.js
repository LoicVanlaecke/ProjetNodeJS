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
create: function (req, res) {
        var todoContent = req.body.content;
        // create todo
        Todo.create({
            content: todoContent
        }, function (err, todo) {
            if (err) res.render('error', {
                    error: 'Error creating your todo :('
                })
                // reload collection
            res.redirect('/todos');
        });
    }
    , destroy: function (req, res) {
        var id = req.params.id;
        Todo.findByIdAndRemove(id, function (err, todo) {
            if (err) res.render('error', {
                error: 'Error deleting todo'
            });
            res.redirect('/todos');
        });
    },