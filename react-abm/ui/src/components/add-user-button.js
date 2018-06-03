import React, { Component } from 'react';

class AddUserButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
          buttonClicked: this.props.onClick
        };

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.state.buttonClicked();
    }

    render() {
        return(
            <button type="button"
                onClick={() => { this.buttonClicked(); this.props.history.push("/form"); }} >
                Add new user
            </button>
        );
    }
}

export default AddUserButton;
