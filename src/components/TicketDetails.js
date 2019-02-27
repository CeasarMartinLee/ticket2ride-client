import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Button } from '@material-ui/core'
import TicketForm from './TicketForm'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 300,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

function TicketDetails(props) {
    const { classes } = props;
    console.log(props)
    return (
        <div>
            {props.editMode && <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}

            {!props.editMode && <div>
                <div className={classes.root}>
                    <GridList cellHeight={230} cols={1} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={1} style={{ height: 50 }}>
                            <ListSubheader component="div">Selling ticket for {props.ticket.event.name} Event</ListSubheader>
                        </GridListTile>
                        <GridListTile key={props.ticket.id}>
                            <img src={props.ticket.picture} alt={"ticket"} />
                            <GridListTileBar
                                title={'EUR ' + props.ticket.price}
                                subtitle={
                                    <span> {props.ticket.description} <br /> {'seller: ' + props.ticket.user.firstName + " " + props.ticket.user.lastName}</span>
                                }
                                actionIcon={ 
                                    <IconButton className={classes.icon}>
                                      <div>
                                        RISK: <InfoIcon style={{ opacity: 0.7, color: 'lightgray' }}/>  
                                      </div>
                    
                                    </IconButton>
                                  }
                            />
                        </GridListTile>
                    </GridList>
                </div >
                <div style={{ textAlign: "center" }}>
                    <Button onClick={() => props.onDelete(props.ticket.id)}>DELETE</Button>
                    <Button onClick={props.onEdit}>Edit</Button>
                </div>
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

TicketDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketDetails);


