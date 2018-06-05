import React from "react";

import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import MaterialUIAlertDialog from "./material-ui-alert-dialog";

class MaterialUIUsersRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: this.props.user.name,
                username: this.props.user.username,
                email: this.props.user.email,
                gender: this.props.user.gender,
                id: this.props.user.id
            },
            onEditUserClicked: this.props.onEditUserClicked,
            onDeleteUserClicked: this.props.onDeleteUserClicked,
            openAlertDialog: false
        };

        this.onEditUserClicked = this.onEditUserClicked.bind(this);
        this.onDeleteUserClicked = this.onDeleteUserClicked.bind(this);
        this.onAlertDialogClose = this.onAlertDialogClose.bind(this);
    }

    onEditUserClicked(e) {
        this.state.onEditUserClicked(e, this.state.user);
    }

    //Fix it
    onDeleteUserClicked(e) {
        this.setState({openAlertDialog: true}, function() {console.log(this.state.openAlertDialog)});
        this.state.onDeleteUserClicked(e, this.state.user);
    }

    onAlertDialogClose() {
        this.setState({openAlertDialog: false});
    }

    render() {

        const CustomTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);

        return (
            <TableRow hover={true} component="tr">
                <CustomTableCell> {this.state.user.name} </CustomTableCell>
                <CustomTableCell>{this.state.user.username}</CustomTableCell>
                <CustomTableCell>{this.state.user.email}</CustomTableCell>
                <CustomTableCell>{this.state.user.gender}</CustomTableCell>
                <CustomTableCell>
                    <IconButton aria-label="Edit" color="primary"
                                onClick={ this.onEditUserClicked }>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Delete" color="secondary"
                                onClick={ this.onDeleteUserClicked }>
                        <DeleteIcon />
                    </IconButton>
                    <MaterialUIAlertDialog openAlertDialog={this.state.openAlertDialog}
                                           onAlertDialogClose={this.onAlertDialogClose}/>
                </CustomTableCell>
            </TableRow>
        );
    }
}



export default MaterialUIUsersRow;
