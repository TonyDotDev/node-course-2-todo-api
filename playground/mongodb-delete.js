// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*     //deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }) */

    //deleteOne
/*     db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result => {
        console.log(result);
    })) */

    //findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }) */

    //Challenge: 
    
    //deleteMany from users with name Tony
    db.collection('Users').deleteMany({name: 'Tony'}).then((result) => {
        console.log(result);
    })

    //delete second user by id with findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b46c22c665cd7258081447a')
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});