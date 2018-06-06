import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { connect } from "react-redux";

import { deleteUser } from "../../actions/users-actions";

class MaterialUIAlertDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onAlertDialogClose: this.props.onAlertDialogClose
        };

        this.onAlertDialogClose = this.onAlertDialogClose.bind(this);
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    onAlertDialogClose() {
        this.state.onAlertDialogClose();
    }

    onDeleteUser() {
        this.state.onAlertDialogClose();
        this.props.onUserDeleted(this.props.users.selectedUser);
    }

    render() {

        function Transition(props) {
            return <Slide direction="up" {...props} />;
        }

        return (
            <div>
                <Dialog
                    open={this.props.openAlertDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.onAlertDialogClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description">
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Are you sure you wish to delete this user?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={this.onDeleteUser} color="primary">
                            Delete
                        </Button>
                        <Button onClick={this.onAlertDialogClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

//Mapeo de el state de redux a las properties locales
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

//Mapeo las funciones a una acción específica
function mapDispatchToProps(dispatch) {
    return {
        onUserDeleted: (user) => dispatch(deleteUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialUIAlertDialog);
