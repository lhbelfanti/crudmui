import React from "react";

import EditUserButton from "./edit-user-button";
import DeleteUserButton from "./delete-user-button";
import UsersRow from "./users-row";


class UsersTableList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onUserClicked: this.props.onClick,
            users: this.props.users,
            selectedUser: {
                htmlItem: undefined,
                user: undefined
            }
        };

        this.onUserClicked = this.onUserClicked.bind(this);
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
            let selected = {selectedUser: { htmlItem: undefined, user: undefined} };
            this.setState({ selectedUser: selected.selectedUser });
            this.state.onUserClicked(undefined, selected.selectedUser);
        }
        else {
            let selected = {selectedUser: { htmlItem: e.currentTarget, user: user} };
            this.setState({ selectedUser: selected.selectedUser });
            this.state.onUserClicked(user, selected.selectedUser);
        }
    }

    render() {

        const style = {
            th: {
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "3px",
                width: "10%"
            }
        };

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th style={style.th}>Name</th>
                        <th style={style.th}>Username</th>
                        <th style={style.th}>Email</th>
                        <th style={style.th}>Gender</th>
                    </tr>
                    {this.state.users.map((u, index) =>
                        <UsersRow key={index} user={u} onClick={ this.onUserClicked }/>
                    )}
                    </tbody>
                </table>
                <div>
                    <EditUserButton history={this.props.history} btnDisabled={this.props.btnDisabled}/>
                    <DeleteUserButton btnDisabled={this.props.btnDisabled}/>
                </div>
            </div>
        );
    }
}

export default UsersTableList;
