import React from 'react'
import {connect} from 'react-redux'
import {createTicket} from '../actions/tickets'
import TicketForm from './TicketForm'

class CreateTicketFormContainer extends React.Component {
  state = {
    price: '',
    description: '',
    picture: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.createTicket(this.state, this.props.props.props.match.params.id)
    this.setState({
      price: '',
      description: '',
      picture: ''
    })

  }

  render() {
    console.table(this.state)
    console.log(this.props)
    console.log(this.state)
    return (<TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createTicket})(CreateTicketFormContainer)
