var express = require('express');
var port = 3000;
var app = express();
// Routes
var main = require('./routes/main');
var todo = require('./routes/todo');
var todoRouter = express.Router();
app.use('/todos', todoRouter);
app.get('/', main.index);
todoRouter.get('/', todo.all);
todoRouter.post('/create', todo.create);
todoRouter.post('/destroy/:id', todo.destroy);
todoRouter.post('/edit/:id', todo.edit);
require('./config/models/Todo');
mongoose.connect('192.168.99.100:27017', function () {
    console.log('connected to database!')
});
app.listen(port, function () {
    console.log('Server listening on port ' + port)
});