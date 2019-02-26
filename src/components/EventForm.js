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

function EventForm(props) {
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
          Event
        </Typography>
        <form className={classes.form} onSubmit={props.onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Event Name</InputLabel>
            <Input id="name" name="name" required={true} autoFocus onChange={props.onChange} value={props.values.name} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input name="description" id="description" multiline={true} rows={2} required={true} onChange={props.onChange} value={props.values.description} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="logo">Logo</InputLabel>
            <Input name="logo" id="logo" required={true} multiline={true} rows={2} onChange={props.onChange} value={props.values.logo} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="startDate">Start Date</InputLabel>
            <Input name="startDate" id="startDate" required={true} type="date" classes={{ input: classes.inputRight }} onChange={props.onChange} value={props.values.startDate} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="endDate">End Date</InputLabel>
            <Input name="endDate" id="endDate" required={true} type="date" classes={{ input: classes.inputRight }} onChange={props.onChange} value={props.values.endDate} />
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
  // return (
  // <form onSubmit={props.onSubmit}>
  //   <label>
  //     Name:
  //   <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
  //   </label>

  //   <label>
  //     Description:
  //   <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
  //   </label>

  //   <label>
  //     Logo:
  //   <input type="text" name="date" onChange={props.onChange} value={props.values.date} />
  //   </label>

  //   <label>
  //     Start Date:
  //   <input type="text" name="date" onChange={props.onChange} value={props.values.date} />
  //   </label>

  //   <label>
  //     End Date:
  //   <input type="text" name="date" onChange={props.onChange} value={props.values.date} />
  //   </label>

  //   <button type="submit">Save</button>
  // </form>)
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventForm);