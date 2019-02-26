import React from 'react'
import {loadEvents, deleteEvent} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import CreateEventFormContainer from './CreateEventFormContainer'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  deleteEventWithId = (id) => {
    this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props, 'statetoprops')
    console.log(this.state)
    if (!this.props.events) return null
    return (
      <React.Fragment>
        <EventsList
          events={this.props.events}
          onDelete={this.deleteEventWithId}
        />
        {this.props.authenticated && <CreateEventFormContainer />}
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  authenticated: !!state.currentUser
})

export default connect(mapStateToProps, {loadEvents, deleteEvent})(EventsListContainer)
