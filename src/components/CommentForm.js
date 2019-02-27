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
      width: 575,
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

function CommentForm(props) {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Typography component="h1" variant="h5">
          Comment
        </Typography> */}
        <form className={classes.form} onSubmit={props.onSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="comment">Add Comment</InputLabel>
            <Input name="comment" id="comment" multiline={true} rows={2} required={true} onChange={props.onChange} value={props.values.comment} />
          </FormControl>
          <div style={{textAlign: "right"}}>
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </div>

        </form>
      </Paper>
    </main>
  );

}

CommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentForm);