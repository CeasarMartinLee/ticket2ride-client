import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  paper: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

function CommentsList(props) {
  const { classes } = props;
  console.log(props)
  return (
    <Paper className={classes.paper}>
      <List className={classes.root}>
        {props.comments.map(comment => (

          <ListItem alignItems="flex-start" key={comment.id}>
            <ListItemAvatar>
              <Avatar alt="avatar image" src="https://catholic-foundation.org/wp-content/uploads/2017/07/unisex-avatar.png" />
            </ListItemAvatar>
            <ListItemText
              primary={comment.user.firstName + " " + comment.user.lastName}
              secondary={
                <React.Fragment>
                  <Typography component="span" className={classes.inline} color="textPrimary">
                  </Typography>
                  {comment.comment}
                </React.Fragment>
              }
            />

                  {props.authenticated && 
                    <div>
                    <DeleteIcon className={classes.icon} style={{color: 'gray'}} onClick={() => props.onDelete(comment.id)}/>
                      {/* <Button onClick={() => props.onDelete(comment.id)}>DELETE</Button> */}

                    </div>
                  }
          </ListItem>
          
        ))}
      </List>

    </Paper>

  )
}

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);
