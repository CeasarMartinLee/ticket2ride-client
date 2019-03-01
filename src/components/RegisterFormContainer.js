import React from 'react'
import RegisterForm from './RegisterForm'
import {connect} from 'react-redux'
import {registerUser} from '../actions/auth'
import { Redirect } from 'react-router-dom';


class RegisterFormContainer extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '', 
    password: '',
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.registerUser(
      this.state.firstName, 
      this.state.lastName,
      this.state.email,
      this.state.password
      )
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    if (this.props.register.success) return <Redirect to="/login" />;
    console.log(this.props)
    return <RegisterForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
  }
}

const mapStateToProps = state => ({
  register: state.register
})

export default connect(mapStateToProps, {registerUser})(RegisterFormContainer)