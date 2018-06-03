import { addUser, updateUser, deleteUser } from '../api/apiCalls'

const initialState = {
    list: undefined,
    selectedUser: undefined
};


export default function usersReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_USERS':
            state.list = action.payload;
            return state;

        case 'SELECT_USER':
            state.selectedUser = action.payload;
            return state;

        case 'ADD_USER':
            addUser(action.payload, action.history)
            .then(function (res) {
                console.log("User added: " + JSON.stringify(res));
            })
            .catch(function (err) {
                console.log(err);
            });
            return state;

        case 'UPDATE_USER':
            updateUser(action.payload, action.history)
            .then(function (res) {
                console.log("User updated: " + JSON.stringify(res));
            })
            .catch(function (err) {
                console.log(err);
            });
            return state;

        case 'DELETE_USER':
            deleteUser(action.payload)
            .then(function (res) {
                console.log("User deleted: " + JSON.stringify(res));
            })
            .catch(function (err) {
                console.log(err);
            });
            return state;

        default:
            return state;
    }
};
