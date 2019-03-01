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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.default,
    color: theme.palette.common.black,
    fontSize: 14,

  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '98%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  table: {
    minWidth: 0,
    },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  }
});

function TicketList(props) {
  const { classes } = props;
  console.log(props)
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow >
          <CustomTableCell>Ticket Seller</CustomTableCell>
          <CustomTableCell align="right">Ticket Price</CustomTableCell>
          <CustomTableCell align="right">Comments</CustomTableCell>
          <CustomTableCell align="right">Description</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.tickets.map(ticket => (
          <TableRow hover key={ticket.id}>
            <CustomTableCell component="th" scope="row">
              {ticket.user.firstName}
            </CustomTableCell>
            <CustomTableCell align="right">{ticket.price}</CustomTableCell>
            <CustomTableCell align="right">
              <Link to={`/events/${props.props.props.match.params.id}/tickets/${ticket.id}`} >
                <CommentIcon style={{ color: 'darkgray' }}/>
              </Link>
            </CustomTableCell>
            <CustomTableCell align="right">{ticket.description}</CustomTableCell>
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
