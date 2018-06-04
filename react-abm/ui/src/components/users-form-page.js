import React from "react";

import { connect } from "react-redux";

import { addUser, updateUser } from "../actions/users-actions";
import UsersTitle from "./users-title";
import UsersForm from "./users-form";

class UsersFormPage extends React.Component {

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
            isEditing: false,
            titleText: ''
        };

        this.userAdded = this.userAdded.bind(this);
        this.userEdited = this.userEdited.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.modifyUser = this.modifyUser.bind(this);
    }

    componentDidMount() {
        if (this.props.users.selectedUser !== undefined) {
            this.setState({user: this.props.users.selectedUser, isEditing: true, titleText: "Edit user: "});
        }
        else {
            this.setState({titleText: "Add new user:"});
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

        return(
            <div>
                <UsersTitle title={this.state.titleText}/>
                <UsersForm user={this.state.user} onSubmitClicked={this.onSubmitClicked} modifyUser={this.modifyUser}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersFormPage);
