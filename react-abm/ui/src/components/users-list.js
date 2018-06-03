import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getUsers } from '../api/apiCalls';

import { fetchUsers, selectUser } from '../actions/users-actions';

import UsersRow from './users-row';
import AddUserButton from './add-user-button';
import EditUserButton from "./edit-user-button";
import DeleteUserButton from "./delete-user-button";


class UsersList extends Component {

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

    onUserClicked(e, user) {
        if (this.state.selectedUser.user !== undefined) {
            let selectedUserHtml = this.state.selectedUser.htmlItem;
            let selectedUser = this.state.selectedUser.user;

            if (selectedUser.id === user.id) {
                let color = selectedUserHtml.style.color === 'red' ? 'black' : 'red';
                selectedUserHtml.style.color = color;
                e.currentTarget.style.color = color;
            }
            else
            {
                selectedUserHtml.style.color = 'black';
                e.currentTarget.style.color = 'red';
            }
        }
        else
            e.currentTarget.style.color = 'red';


        if (e.currentTarget.style.color === 'black') {
            this.setDefaultSelectedUserState();
            this.props.onUserSelected(undefined);
        }
        else {
            this.setState({
                selectedUser: {
                    htmlItem: e.currentTarget,
                    user: user
                }
            });

            this.props.onUserSelected(user);
        }
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
                <h2>List of users:</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                        {this.state.users.map((u, index) =>
                            <UsersRow key={index} user={u} onClick={ this.onUserClicked }/>
                        )}
                    </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
