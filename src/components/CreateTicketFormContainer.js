import React from 'react'
import {connect} from 'react-redux'
import {createTicket} from '../actions/tickets'
import TicketForm from './TicketForm'

class CreateTicketFormContainer extends React.Component {
  state = {
    price: '',
    description: '',
    picture: '',
    address: '',
    latitude: '',
    longitude: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.setState({
      latitude: this.props.props.crd.latitude,
      longitude: this.props.props.crd.longitude
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createTicket(this.state, this.props.props.props.match.params.id)
    this.setState({
      price: '',
      description: '',
      picture: '',
      address: '',
      latitude: '',
      longitude: ''
    })

  }

  render() {
    console.table(this.state)
    console.log(this.props)
    console.log(this.state)
    if (!this.props.props.crd) return <div>Loading Ticket Form</div>
    return (<TicketForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      props={this.props}
    />)
  }
}

export default connect(null, {createTicket})(CreateTicketFormContainer)
