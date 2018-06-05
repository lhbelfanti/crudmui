import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import MaterialUIUsersRow from "./material-ui-users-row";

class MaterialUIUsersList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onUserClicked: this.props.onClick,
            users: this.props.users,
            onEditUserClicked: this.props.onEditUserClicked,
            onDeleteUserClicked: this.props.onDeleteUserClicked
        };

        this.onEditUserClicked = this.onEditUserClicked.bind(this);
        this.onDeleteUserClicked = this.onDeleteUserClicked.bind(this);
    }

    onEditUserClicked(e, user) {
        let selected = {selectedUser: { htmlItem: e.currentTarget, user: user} };
        this.state.onEditUserClicked(user, selected.selectedUser);
    }

    onDeleteUserClicked(e, user) {
        let selected = {selectedUser: { htmlItem: e.currentTarget, user: user} };
        this.state.onDeleteUserClicked(user, selected.selectedUser);
    }

    render() {

        const CustomTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                fontSize: 15,
            }
        }))(TableCell);

        const CustomPaper = withStyles(theme => ({
            root: {
                margin: 30
            }
        }))(Paper);

        return (
            <CustomPaper elevation={14}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Username</CustomTableCell>
                            <CustomTableCell>Email</CustomTableCell>
                            <CustomTableCell>Gender</CustomTableCell>
                            <CustomTableCell>Actions</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {this.state.users.map( (u, index) =>
                                <MaterialUIUsersRow key={index} user={u}
                                                    onEditUserClicked={ this.onEditUserClicked }
                                                    onDeleteUserClicked={ this.onDeleteUserClicked }/>
                            )}
                    </TableBody>
                </Table>
            </CustomPaper>
        )
    }
}

export default MaterialUIUsersList;
