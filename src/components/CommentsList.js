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
          </ListItem>
        ))}
      </List>
    </Paper>



  )
  // return (
  //   <Paper className={classes.root}>
  //   <Table className={classes.table}>
  //     <TableHead>
  //       <TableRow>
  //         <TableCell>Ticket Seller</TableCell>
  //         <TableCell align="right">Ticket Price</TableCell>
  //         <TableCell align="right">Description</TableCell>
  //         <TableCell align="right">Comments</TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {props.tickets.map(ticket => (
  //         <TableRow key={ticket.id}>
  //           <TableCell component="th" scope="row">
  //             {ticket.user.firstName}
  //           </TableCell>
  //           <TableCell align="right">{ticket.price}</TableCell>
  //           <TableCell align="right">{ticket.description}</TableCell>
  //           <TableCell align="right">
  //             <Link to={`/events/${props.props.props.match.params.id}/tickets/${ticket.id}`} >
  //               <CommentIcon style={{ color: 'darkgray' }}/>
  //             </Link>
  //           </TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // </Paper>
  // )
}

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);
