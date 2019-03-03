import React from 'react'
import {loadTickets} from '../actions/tickets'
import {connect} from 'react-redux'
import TicketsList from './TicketsList'
import CreateTicketFormContainer from './CreateTicketFormContainer'

class TicketsListContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.loadTickets(this.props.props.match.params.id)
  }

  // deleteTicketWithId = (id) => {
  //   this.props.deleteTicket(id)
  //   this.props.history.push('/events/' + this.props.props.match.params.id)
  // }

  render() {
    console.log(this.props, 'statetoprops')
    console.log(this.state)
    if (!this.props.tickets) return null
    return (
      <React.Fragment>
        <TicketsList
          tickets={this.props.tickets}
          props={this.props}
          onDelete={this.deleteTicketWithId}
        />
        {this.props.authenticated && <CreateTicketFormContainer props={this.props} />}
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  authenticated: !!state.currentUser
})

export default connect(mapStateToProps, {loadTickets})(TicketsListContainer)
