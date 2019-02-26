import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Button } from '@material-ui/core'
import EventForm from './EventForm'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        height: 250,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

function EventDetails(props) {
    const { classes } = props;
    console.log(props)
    return (
        <div style={{ textAlign: "center" }}>
            {props.editMode && <EventForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}

            {!props.editMode && <div>
                <div className={classes.root}>
                    <GridList cellHeight={230} cols={1} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={1} style={{ height: 0 }}>
                            {/* <ListSubheader component="div">EVENTS</ListSubheader> */}
                        </GridListTile>
                        <GridListTile key={props.event.id}>
                            <img src={props.event.logo} alt={props.event.name} />
                            <GridListTileBar
                                title={props.event.name}
                                subtitle={
                                    <span> {props.event.description} <br /> {props.event.startDate}  - {props.event.endDate}</span>
                                }
                            />
                        </GridListTile>
                    </GridList>
                </div>
                <Button onClick={() => props.onDelete(props.event.id)}>DELETE</Button>
                <Button onClick={props.onEdit}>Edit</Button>
            </div>}


        </div>

    )
    // return (
    //     <div>
    //     {props.editMode && <EventForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}

    //     {!props.editMode && <div>
    //         <h1>Event: {props.event.name}</h1>
    //         <button onClick={() => props.onDelete(props.event.id)}>DELETE</button>
    //         <button onClick={props.onEdit}>Edit</button>

    //     </div>}
    // </div>
    // )
}

EventDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventDetails);


