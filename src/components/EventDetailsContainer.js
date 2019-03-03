import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'
import TicketsListContainer from './TicketsListContainer'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  state = { editMode: false }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        description: this.props.event.description,
        logo: this.props.event.logo,
        startDate: this.props.event.startDate,
        endDate: this.props.event.endDate,
      }
    })
  }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

  success = (pos) => {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(crd)
    this.crd = crd
    console.log(this)

  }

//   deleteEventWithId = id => _event => {
//     this.props.deleteEvent(id)
//     this.props.history.push('/')
//   }

  deleteEventWithId = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/events')
  }

  render() {
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(this.success, error, options);

    console.log(this.props)
    console.log(this.props.event)


    if (!this.props.event) return null


    return (
      <div>
        <EventDetails 
        event={this.props.event} 
        onDelete={this.deleteEventWithId}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
        editMode={this.state.editMode}
        formValues={this.state.formValues}
        />
        <TicketsListContainer props={this.props} crd={this.crd}/>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent, deleteEvent, updateEvent})(EventDetailsContainer)
