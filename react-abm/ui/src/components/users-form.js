import React from "react";


class UsersForm extends React.Component {

    constructor(props) {
        super(props);


        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.modifyUser = this.modifyUser.bind(this);
    }

    onSubmitClicked() {
        this.props.onSubmitClicked();
    }

    modifyUser(k, v) {
        this.props.modifyUser(k, v);
    }

    render() {
        return (
            <div>
                Name:
                <div>
                    <input type="text" name="name" placeholder="Name"
                           value={this.props.user.name}
                           onChange={(e) => this.modifyUser('name', e.target.value) }/>
                </div>
                Username:
                <div>
                    <input type="text" name="username" placeholder="Username"
                           value={this.props.user.username}
                           onChange={(e) => this.modifyUser('username', e.target.value) }/>
                </div>
                Email:
                <div>
                    <input type="text" name="email" placeholder="Mail"
                           value={this.props.user.email}
                           onChange={(e) => this.modifyUser('email', e.target.value) }/>
                </div>
                Gender:
                <div>
                    <select
                        value={this.props.user.gender}
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

export default UsersForm;
