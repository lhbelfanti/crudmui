import React from "react";

import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";

class MaterialUIAddUserButton extends React.Component {

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

        const style = {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        };

        return (
            <div>
                <Button variant="fab" color="primary" aria-label="add" style={style}
                        onClick={() => { this.buttonClicked(); this.props.history.push("/form"); }}>
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

export default MaterialUIAddUserButton;
