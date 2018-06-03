import { combineReducers } from 'redux';

import UsersReducer from './users-reducer';


//'users' es el nombre de la property que se va a guardar en el store de Redux
const rootReducer = combineReducers({
    users: UsersReducer
});

export default rootReducer;
