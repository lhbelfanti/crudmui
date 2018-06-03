var express = require('express');
var cors = require('cors');
var body_parser = require('body-parser');

var fetchUsers = require('./db').fetchUsers; //Importa la funcion fetchUsers (encargada de obtener los usuarios)


//Inicializo Express
var app = express();
app.use(cors());
app.use(body_parser.json());


//Los usuarios obtenidos se guardaran en este array
var users = [];
//Obtengo los usuarios
fetchUsers(function(data) {
    users = data;
});


//---------- API ----------

//Obtiene users
app.get('/user/', function(req, res) {
    res.send(users);
});


//Agrega un user
app.post('/user/', function(req, res) {
    console.log(req.body);
    users.push(req.body);
    res.sendStatus(201);
});


//Actualiza un user
app.put('/user/', function(req, res) {

    for(var i = 0; i < users.length; i++) {
        if (req.body.id === users[i].id) {
            users[i] = req.body;
            res.sendStatus(204);
            return;
        }
    }

    res.sendStatus(404);
});


//Borra un user
app.delete('/user/:id', function(req, res) {

    for(var i = 0; i < users.length; i++) {
        if (parseInt(req.params.id) === users[i].id) {
            users.splice(i, 1);
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
});

//---------- API ----------


app.listen(3001, function () {
    console.log("Server running on port 3001")
});
