import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../actions/comments'
import CommentForm from './CommentForm'

class CreateCommentFormContainer extends React.Component {
  state = {
    comment: []
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.props)
    this.props.createComment(
      this.state,
      this.props.props.props.match.params.eventId,
      this.props.props.props.match.params.ticketId,
      )
    this.setState({
      comment: []
    })

  }

  render() {
    console.table(this.state)
    console.log(this.props)
    console.log(this.state)
    return (<CommentForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createComment})(CreateCommentFormContainer)
