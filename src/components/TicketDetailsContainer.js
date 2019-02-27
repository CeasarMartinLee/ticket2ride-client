import React from 'react'
import {connect} from 'react-redux'
import TicketDetails from './TicketDetails'
import {loadTicket, deleteTicket, updateTicket} from '../actions/tickets'
import CommentsListContainer from './CommentsListContainer'

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.loadTicket(Number(this.props.match.params.eventId), Number(this.props.match.params.ticketId))
  }

  state = { editMode: false }

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        price: this.props.ticket.price,
        description: this.props.ticket.description,
        picture: this.props.ticket.logo,
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
    this.props.updateTicket(this.props.ticket.id, this.state.formValues)
  }

  deleteTicketWithId = () => {
    this.props.deleteTicket(this.props.ticket.id)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)

    console.log(this.props.ticket)

    if (!this.props.ticket) return null


    return (
      <div>
        <TicketDetails 
        ticket={this.props.ticket} 
        props={this.props}
        onDelete={this.deleteTicketWithId}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
        editMode={this.state.editMode}
        formValues={this.state.formValues}
        />
        <CommentsListContainer props={this.props}/>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket
})

export default connect(mapStateToProps, {loadTicket, deleteTicket, updateTicket})(TicketDetailsContainer)