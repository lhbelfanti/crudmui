import React, { Component } from 'react';

class UsersRow extends Component {

    constructor(props) {
      super(props);

        this.state = {
            user: {
                name: this.props.user.name,
                username: this.props.user.username,
                email: this.props.user.email,
                gender: this.props.user.gender,
                id: this.props.user.id
            },
            onClicked: this.props.onClick
        };

        this.rowClicked = this.rowClicked.bind(this);
    }

    rowClicked(e) {
        this.state.onClicked(e, this.state.user);
    }

    render() {
        return (
            <tr onClick={ this.rowClicked }>
                <td>{this.state.user.name}</td>
                <td>{this.state.user.username}</td>
                <td>{this.state.user.email}</td>
                <td>{this.state.user.gender}</td>
            </tr>
        );
    }
}

export default UsersRow;
