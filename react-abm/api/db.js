var fetch = require('fetch').fetchUrl;

//Obtengo la información de los usuarios
exports.fetchUsers = function fetchUsers(handler) {

    fetch('https://randomuser.me/api/?results=10&inc=name,email,login,gender', function(error, meta, body) {

        var data = JSON.parse(body.toString()).results;
        var users = [];

        for(var i = 0; i < data.length; i++) {
            var u = data[i];
            users.push( {
                name: u.name.first + ' ' + u.name.last,
                username: u.login.username,
                email: u.email,
                gender: u.gender,
                id: i
            });
        }

        handler(users);

    });
};


