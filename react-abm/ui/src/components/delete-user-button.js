import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deleteUser } from '../actions/users-actions';

class DeleteUserButton extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onConfirm() {
        if (window.confirm('Are you sure you wish to delete this user?'))
            this.props.onUserDeleted(this.props.users.selectedUser);
    }

    render() {
        return(
            <button type="button"
                    onClick={ this.onConfirm }
                    disabled={ this.props.btnDisabled} >
                Delete selected user
            </button>
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
        onUserDeleted: (users) => dispatch(deleteUser(users))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserButton);
