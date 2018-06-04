import React from "react";

import { connect } from "react-redux";

import { getUsers } from "../api/apiCalls";

import { fetchUsers, selectUser } from "../actions/users-actions";

import { USE_MAT_UI_TITLE, USE_MAT_UI_LIST } from "../config/config";

import AddUserButton from "./add-user-button";
import EditUserButton from "./edit-user-button";
import DeleteUserButton from "./delete-user-button";
import UsersTableList from "./users-table-list";
import UsersTitle from "./users-title";


class UsersListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: undefined,
            selectedUser: {
                htmlItem: undefined,
                user: undefined
            }
        };

        this.dataFetched = this.dataFetched.bind(this);
        this.onUserClicked = this.onUserClicked.bind(this);
        this.onAddUserClicked = this.onAddUserClicked.bind(this);
    }

    setDefaultSelectedUserState() {
        this.setState({
            selectedUser: {
                htmlItem: undefined,
                user: undefined
            }
        });
    }

    componentDidMount() {
        getUsers(this.dataFetched)
            .then(function (res) {
                console.log("Users fetched: " + JSON.stringify(res));
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    dataFetched(users) {
        this.setState({users: users});
        this.props.onUsersFetched(users);
    }

    onUserClicked(user, selectedUser) {
        this.setState({selectedUser: selectedUser});
        this.props.onUserSelected(user);
    }

    onAddUserClicked() {
        this.props.onUserSelected(undefined);
        this.setDefaultSelectedUserState()
    }

    render() {

        if (this.state.users === undefined)
            return (
                <h4>Fetching data...</h4>
            );

        return(
            <div>
                <UsersTitle title={"List of users:"}/>
                <UsersTableList users={this.state.users} onClick={ this.onUserClicked }/>
                <div>
                    <AddUserButton history={this.props.history} onClick={ this.onAddUserClicked }/>
                    <EditUserButton history={this.props.history} btnDisabled={this.state.selectedUser.user === undefined}/>
                    <DeleteUserButton btnDisabled={this.state.selectedUser.user === undefined}/>
                </div>
            </div>
        );
    }
}

//Mapeo de el state de redux a las properties locales
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

//Mapeo las funciones a una acción específica
function mapDispatchToProps(dispatch) {
    return {
        onUsersFetched: (users) => dispatch(fetchUsers(users)),
        onUserSelected: (user) => dispatch(selectUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
