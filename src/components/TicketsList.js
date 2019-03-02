import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom'



function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'seller', numeric: false, disablePadding: false, label: 'Seller' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'comment', numeric: true, disablePadding: false, label: 'Comment' },
  { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead >
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                // align={row.numeric ? 'right' : 'left'}
                align={'left'}

                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const styles = theme => ({
  root: {
    width: '98%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  table: {
    minWidth: 0,

  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class TicketList extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'price',
    page: 0,
    rowsPerPage: 8,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };


  render() {
    const { classes } = this.props;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.tickets.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={this.props.tickets.length}
            />
            <TableBody>
              {stableSort(this.props.tickets, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow
                      hover
                      // onClick={event => this.handleClick(event, n.id)}
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell component="th" scope="row" padding="dense">
                        {n.user.firstName}<span>&nbsp;</span>{n.user.lastName}
                      </TableCell>
                      <TableCell style={{fontWeight: 900}} align="left">
                        {(() =>{
                          switch (true) {
                            case (n.risk < 30):
                              return <div style={{ color: 'green' }}>{n.price}</div>
                            case (n.risk >= 30 && n.risk < 70):
                              return <div style={{ color: 'orange' }}>{n.price}</div>
                            case (n.risk >= 70):
                              return <div style={{ color: 'red' }}>{n.price}</div>
                            default:
                              return null;
                          }
                        })()}
                      </TableCell>
                      <TableCell align="left" >
                      <Link to={`/events/${this.props.props.props.match.params.id}/tickets/${n.id}`} >
                        <svg style={{color: 'gray'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/></svg>
                      </Link>
                    </TableCell >
                      <TableCell align="left" >{n.description}</TableCell>
                    </TableRow>
                  );  
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={this.props.tickets.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

TicketList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketList);
