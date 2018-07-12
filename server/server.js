var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send(todo);
        }

        res.send({ todo });

    }, (e) => {
        res.status(400).send();
    })


    //Valid id using isValid
        // 404 - send back empty send
    // findById
        // success
            //if todo - send it back
            //if not todo - send back 404 with empty body
        // error
            //400 - send back nothing - error could send back private information

    
})



app.listen(port, () => {
    console.log(`Started up on port ${port}`);
})

module.exports = { app };

