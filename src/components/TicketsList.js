import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CommentIcon from '@material-ui/icons/Comment';


const styles = theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  table: {
    minWidth: 1000,
  },
});

function TicketList(props) {
  const { classes } = props;
  console.log(props)
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Ticket Seller</TableCell>
          <TableCell align="right">Ticket Price</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Comments</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.tickets.map(ticket => (
          <TableRow key={ticket.id}>
            <TableCell component="th" scope="row">
              {ticket.user.firstName}
            </TableCell>
            <TableCell align="right">{ticket.price}</TableCell>
            <TableCell align="right">{ticket.description}</TableCell>
            <TableCell align="right">
              <Link to={`/events/${props.props.props.match.params.id}/tickets/${ticket.id}`} >
                <CommentIcon style={{ color: 'darkgray' }}/>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  )
}

TicketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketList);
