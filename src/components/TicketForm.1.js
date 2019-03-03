import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import red from '@material-ui/core/colors/red';
// import Avatar from '@material-ui/core/Avatar';
// import Icon from '@material-ui/core/Icon';
// import add_circle from '@material-ui/core/Icon';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  inputRight: {
    textAlign: 'right',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function getAddress() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

}
function TicketForm(props) {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
          {/* <Icon className={classes.iconHover} style={{ fontSize: 30 }}> */}
            {/* add_circle */}
          {/* </Icon> */}

        {/* </Avatar> */}
        <Typography component="h1" variant="h5">
          Ticket
        </Typography>
        <form className={classes.form} onSubmit={props.onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input name="description" id="description" multiline={true} rows={2} required={true} onChange={props.onChange} value={props.values.description} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="price">Ticket Price</InputLabel>
            <Input name="price" id="price" required={true} onChange={props.onChange} value={props.values.price} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="picture">Picture</InputLabel>
            <Input name="picture" id="picture" required={false} multiline={true} rows={2} onChange={props.onChange} value={props.values.picture} />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </Paper>
    </main>
  );

}

TicketForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketForm);