import React from "react";

import { Switch, Route } from "react-router-dom";

import UsersList from "./users-list-page";
import UsersForm from "./users-form-page";

class Main extends React.Component {

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
