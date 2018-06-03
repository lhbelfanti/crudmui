import React, { Component } from 'react';

class EditUserButton extends Component {

    render() {
        return(
            <button type="button"
                    onClick={() => { this.props.history.push("/form"); }}
                    disabled={ this.props.btnDisabled} >
                Edit selected user
            </button>
        );
    }
}

export default EditUserButton;
