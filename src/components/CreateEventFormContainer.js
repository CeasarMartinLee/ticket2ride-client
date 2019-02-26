import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/events'
import EventForm from './EventForm'

class CreateEventFormContainer extends React.Component {
  state = {
    name: '',
    description: '',
    logo: '',
    startDate: '',
    endDate: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.createEvent(this.state)
    this.setState({
      name: '',
      description: '',
      logo: '',
      startDate: '',
      endDate: ''
    })

  }

  render() {
    console.table(this.state)
    console.log(this.props)
    console.log(this.state)
    return (<EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createEvent})(CreateEventFormContainer)
