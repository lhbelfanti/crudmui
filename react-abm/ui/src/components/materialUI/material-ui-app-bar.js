import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class MatUIAppBar extends React.Component {

    render() {
        return(
            <AppBar>
                <Toolbar>
                    <Typography variant="headline" color="inherit">
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default MatUIAppBar;
