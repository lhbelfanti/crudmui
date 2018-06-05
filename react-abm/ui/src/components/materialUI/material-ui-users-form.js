import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Spellcheck from "@material-ui/icons/Spellcheck";
import Button from "@material-ui/core/Button";


class MaterialUIUsersForm extends React.Component {

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
        const CustomPaper = withStyles(theme => ({
            root: {
                margin: "0 auto",
                padding: 30,
                width:250
            }
        }))(Paper);

        const CustomTextField = withStyles(theme => ({
            root: {
                marginTop: 10,
                marginBottom: 10,
                width: 200
            }
        }))(TextField);

        const CustomButton = withStyles(theme => ({
            root: {
                marginLeft: 10,
                marginRight: 10,
                marginTop: 30
            }
        }))(Button);

        const iconStyle = {
            marginTop: 10,
            marginBottom: 10
        };

        const buttonsDivStyle = {
            margin: "0 auto",
            textAlign: "center"
        };

        return (
            <div>
                <CustomPaper elevation={14}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Spellcheck style={iconStyle}/>
                        </Grid>
                        <Grid item>
                            <CustomTextField type="text" name="name" label="Name"
                                             value={this.props.user.name}
                                             onChange={(e) => this.modifyUser('name', e.target.value) }/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle style={iconStyle}/>
                        </Grid>
                        <Grid item>
                            <CustomTextField type="text" name="username" label="Username"
                                             value={this.props.user.username}
                                             onChange={(e) => this.modifyUser('username', e.target.value) }/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Mail style={iconStyle}/>
                        </Grid>
                        <Grid item>
                            <CustomTextField type="text" name="email" label="Mail"
                                             value={this.props.user.email}
                                             onChange={(e) => this.modifyUser('email', e.target.value) }/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face style={iconStyle}/>
                        </Grid>
                        <Grid item>
                            <CustomTextField type="text" name="gender" label="Gender" select
                                             value={this.props.user.gender}
                                             onChange={(e) => this.modifyUser('gender', e.target.value) }>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </CustomTextField>
                        </Grid>
                    </Grid>
                    <div style={buttonsDivStyle}>
                        <CustomButton
                                color="secondary"
                                onClick={() => { console.log('Canceled...'); this.props.history.push('/');}} >
                            Cancel
                        </CustomButton>
                        <CustomButton variant="contained"
                                color="primary"
                                onClick={ this.onSubmitClicked } >
                            Submit
                        </CustomButton>
                    </div>
                </CustomPaper>
            </div>
        );
    }
}

export default MaterialUIUsersForm;
