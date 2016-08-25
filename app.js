var express = require('express');
var todoController = require('./controllers/todoControllers');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(4000);
console.log('Listening on port 4000');
