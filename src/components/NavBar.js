import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
  };

function NavBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    <Button  color="inherit" className="" onClick={() => {props.history.push('/events')}}> Ticket2Ride </Button>
                </Typography>
                <div>
                    {!props.authenticated &&
                        <div>
                            <Button color="inherit" className="" onClick={() => {props.history.push('/login')}}> Login </Button>
                            <Button color="inherit" className="" onClick={() => {props.history.push('/register')}}> Register </Button>
                        </div>}
                    {props.authenticated &&
                        <div>
                            <Button color="inherit" className="" onClick={() => {props.history.push('/logout')}}> Logout </Button>
                        </div>}
                </div>
            </Toolbar>
        </AppBar>
        </div>

    )
}

const mapStateToProps = state => ({
    authenticated: !!state.currentUser
})

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default  withRouter(connect(mapStateToProps)(withStyles(styles)(NavBar)))