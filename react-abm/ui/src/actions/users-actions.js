export function fetchUsers(users) {
    return {
        type: 'GET_USERS',
        payload: users
    }
}

export function selectUser(user, history) {
    return {
        type: 'SELECT_USER',
        payload: user,
        history: history
    }
}

export function addUser(user, history) {
    return {
        type: 'ADD_USER',
        payload: user,
        history: history
    }
}

export function updateUser(user, history) {
    return {
        type: 'UPDATE_USER',
        payload: user,
        history: history
    }
}

export function deleteUser(user) {
    return {
        type: 'DELETE_USER',
        payload: user
    }
}
