import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addUser, updateUser } from '../actions/users-actions'

class UsersForm extends Component {

    constructor(props) {
        super(props);

        let nextId = (this.props.users.list[this.props.users.list.length - 1].id) + 1;
        this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                gender: 'other',
                id: nextId //Incremento en 1 el id para que sea único
            },
            isEditing: false
        };

        this.userAdded = this.userAdded.bind(this);
        this.userEdited = this.userEdited.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
    }

    componentDidMount() {
        if (this.props.users.selectedUser !== undefined) {
            this.setState({user: this.props.users.selectedUser, isEditing: true});
        }
    }

    onSubmitClicked() {
        if (this.state.isEditing)
            this.userEdited();
        else
            this.userAdded();
    }

    //Agrego un nuevo usuario en el store de Redux
    //La función 'onUserAdded' esta asociada a una acción en la función 'mapDispatchToProps'
    userAdded() {
        this.props.onUserAdded(this.state.user, this.props.history);
    }

    //Edito un usuario y lo guardo en el store de Redux
    //La función 'onUserEdited' esta asociada a una acción en la función 'mapDispatchToProps'
    userEdited() {
        this.props.onUserEdited(this.state.user, this.props.history);
    }

    modifyUser(k, v) {
        let u = this.state.user;
        u[k] = v;
        this.setState( { user: u } );
    }

    render() {

        let title = "Add new user:";
        if (this.state.isEditing)
            title = "Edit user: ";

        return(
            <div>
                <h1>{title}</h1>
                Name:
                <div>
                    <input type="text" name="name" placeholder="Name"
                           value={this.state.user.name}
                           onChange={(e) => this.modifyUser('name', e.target.value) }/>
                </div>
                Username:
                <div>
                    <input type="text" name="username" placeholder="Username"
                           value={this.state.user.username}
                           onChange={(e) => this.modifyUser('username', e.target.value) }/>
                </div>
                Email:
                <div>
                    <input type="text" name="email" placeholder="Mail"
                           value={this.state.user.email}
                           onChange={(e) => this.modifyUser('email', e.target.value) }/>
                </div>
                Gender:
                <div>
                    <select
                        value={this.state.user.gender}
                        onChange={(e) => this.modifyUser('gender', e.target.value) }>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br></br>
                <button type="button"
                        onClick={ this.onSubmitClicked } >
                    Submit
                </button>

                <button type="button"
                    onClick={() => { console.log('Canceled...'); this.props.history.push('/');}} >
                    Cancel
                </button>
            </div>
        );
    }
}

//Mapeo de el state de redux a las properties locales
function mapStateToProps(state) {
    return {
        users: state.users,
        selectedUser: state.selectedUser
    }
}

//Mapeo las funciones a una acción específica
function mapDispatchToProps(dispatch) {
    return {
        onUserAdded: (user, history) => dispatch(addUser(user, history)),
        onUserEdited: (user, history) => dispatch(updateUser(user, history))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);
