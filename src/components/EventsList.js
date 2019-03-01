import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Pagination from 'jw-react-pagination';
//credits to http://jasonwatmore.com/post/2018/04/10/npm-jw-react-pagination-component

const customLabels = {
  
      first: '<<',
      last: '>>',
      previous: '<',
      next: '>'
  
}

const customStyles = {
  ul: {
    backgroundColor: 'white',
    fontSize: 12
  },
  li: {

  },
  a: {
    color: 'blue'
  }
};



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 560,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class EventsList extends React.Component {

  constructor() {
    super();

    this.state = {
      pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.root}>
          <GridList cellHeight={180} cols={3} className={classes.gridList}>
            <GridListTile key="Subheader" cols={3} style={{ height: 10 }}>
              {/* <ListSubheader component="div">EVENTS</ListSubheader> */}
            </GridListTile>
            {this.state.pageOfItems.map(event => (
              <GridListTile key={event.id}>
                <img src={event.logo} alt={event.name} />
                <GridListTileBar
                  title={event.name}
                  subtitle={
                    <span> {event.description} <br /> {event.startDate}  - {event.endDate}</span>
                  }
                  actionIcon={
                    <IconButton className={classes.icon}>

                      <Link to={`/events/${event.id}`} ><InfoIcon style={{ opacity: 0.7, color: 'lightgray' }} /></Link>

                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div >
        <div style={{textAlign: 'center'}}>
          <Pagination items={this.props.events} onChangePage={this.onChangePage} pageSize={9} styles={customStyles} labels={customLabels} />
        </div>
      </div>


    )
  }

}

EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsList);
