import React from "react";

class EditUserButton extends React.Component {

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
