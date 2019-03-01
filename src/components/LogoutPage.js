import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/auth'
import {Redirect } from 'react-router-dom'

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
      console.log(this.props)
    if (this.props.currentUser) return null
    return <Redirect to="/" />
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps,{logout })(LogoutPage)
