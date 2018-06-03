import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom';

import UsersList from './users-list';
import UsersForm from './users-form';

class Main extends Component {

    render() {
        return(
            <Switch>
                <Route exact path='/' component={UsersList} />
                <Route exact path='/form' component={UsersForm} />
            </Switch>
        );
    }
}

export default Main;
