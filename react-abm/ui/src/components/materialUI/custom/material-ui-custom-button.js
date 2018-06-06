import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const styles = theme => ({
    root: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30
    }
});

class CustomButton extends React.Component {

    render() {

        const props = this.props;

        return (
            <Button {...props}> {this.props.text} </Button>
        );
    }
}

export default withStyles(styles)(CustomButton);