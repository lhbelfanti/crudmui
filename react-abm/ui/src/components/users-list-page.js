import React from "react";

import { connect } from "react-redux";

import { getUsers } from "../api/apiCalls";

import { fetchUsers, selectUser } from "../actions/users-actions";

import { USE_MAT_UI_TITLE, USE_MAT_UI_LIST, USE_MAT_UI_ADD_BTN } from "../config/config";

//Default components
import UsersTableList from "./default/users-table-list";
import UsersTitle from "./default/users-title";
import AddUserButton from "./default/add-user-button";

//Material UI components
import MaterialUIAppBar from "./materialUI/material-ui-app-bar";
import MaterialUIUsersList from "./materialUI/material-ui-users-list";
import MaterialUIAddUserButton from "./materialUI/material-ui-add-user-button"


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
        this.onEditUserClicked = this.onEditUserClicked.bind(this);
        this.onDeleteUserClicked = this.onDeleteUserClicked.bind(this);
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
        this.props.onUserSelected(user, undefined);
    }

    onAddUserClicked() {
        this.props.onUserSelected(undefined);
        this.setDefaultSelectedUserState()
    }

    //Material UI specific functions
    onEditUserClicked(user, selectedUser) {
        this.setState({selectedUser: selectedUser});
        this.props.onUserSelected(user, this.props.history);
    }

    onDeleteUserClicked(user, selectedUser) {
        this.setState({selectedUser: selectedUser});
        this.props.onUserSelected(user, undefined);
    }

    render() {

        let loading = (<h4>Fetching data...</h4>);
        if (USE_MAT_UI_TITLE) {
            loading = (<MaterialUIAppBar title={"Users"}/>);
        }

        if (this.state.users === undefined)
            return (
                <div>
                    {loading}
                </div>
            );

        // Title component
        let tableDivStyle = {paddingTop: "0px"};
        let titleComponent = (<UsersTitle title={"Users list"}/>);

        if (USE_MAT_UI_TITLE) {
            tableDivStyle = {paddingTop: "80px"};
            titleComponent = (<MaterialUIAppBar title={"Users list"}/>);
        }

        // List component
        let listComponent = (<UsersTableList users={this.state.users}
                                             onClick={ this.onUserClicked }
                                             history={this.props.history}
                                             btnDisabled={this.state.selectedUser.user === undefined}/>);
        if (USE_MAT_UI_LIST) {
            listComponent = (<MaterialUIUsersList users={this.state.users}
                                                  history={this.props.history}
                                                  onEditUserClicked={this.onEditUserClicked}
                                                  onDeleteUserClicked={this.onDeleteUserClicked}/>);
        }

        //Add user component
        let addUserComponent = (<AddUserButton history={this.props.history}
                                               onClick={ this.onAddUserClicked }/>);
        if (USE_MAT_UI_ADD_BTN) {
            addUserComponent = (<MaterialUIAddUserButton history={this.props.history}
                                                         onClick={ this.onAddUserClicked }/>)
        }

        return(
            <div>
                <div>
                    {titleComponent}
                </div>
                <div style={tableDivStyle}>
                    {listComponent}
                </div>
                {addUserComponent}
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
        onUserSelected: (user, history) => dispatch(selectUser(user, history))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
