import Axios from './axiosModule'

//------- Llamadas a la API -------

export function getUsers(handler) {
    return new Promise(function(resolve, reject) {
        Axios.get('user/')
            .then(function (res) {
                handler(res.data);
                resolve(res.status);
            })
            .catch(function (err) {
                console.log(err);
                reject();
            });
    });
}


// Agrega un nuevo usuario
export function addUser(user, history) {
    return new Promise(function(resolve, reject) {
        Axios.post('user', JSON.stringify(user) )
            .then(function (res) {
                resolve(res.status);
                history.push('/');
            })
            .catch(function (err) {
                console.log(err);
                reject();
            });
    });
}

//Actualiza un usuario
export function updateUser(user, history) {
    return new Promise(function(resolve, reject) {
        Axios.put('user', JSON.stringify(user) )
            .then(function (res) {
                resolve(res.status);
                history.push('/');
            })
            .catch(function (err) {
                console.log(err);
                reject();
            });
    });
}

//Borra un usuario
export function deleteUser(user) {
    return new Promise(function(resolve, reject) {
        Axios.delete('user/' + user.id)
            .then(function (res) {
                resolve(res.status);
                window.location.reload();
            })
            .catch(function (err) {
                console.log(err);
                reject();
            });
    });
}

//------- Llamadas a la API -------
