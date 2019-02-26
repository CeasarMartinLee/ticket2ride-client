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
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function EventsList(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 10 }}>
          {/* <ListSubheader component="div">EVENTS</ListSubheader> */}
        </GridListTile>
        {props.events.map(event => (
          <GridListTile key={event.id}>
            <img src={event.logo} alt={event.name} />
            <GridListTileBar
              title={event.name}
              subtitle={
                <span> {event.description} <br /> {event.startDate}  - {event.endDate}</span>
              }
              actionIcon={
                <IconButton className={classes.icon}>
                  
                  <Link to={`/events/${event.id}`} ><InfoIcon style={{ opacity: 0.7, color: 'lightgray' }}/></Link>

                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
  // return (
  //   <ul>
  //   {props.events.map(event => (
  //     <li key={event.id}>
  //       <Link to={`/events/${event.id}`}>{event.name}</Link>
  //       {/* <button onClick={()=>props.onDelete(event.id)}>x</button> */}
  //     </li>
  //   ))}
  // </ul>
  // )
}

EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsList);
