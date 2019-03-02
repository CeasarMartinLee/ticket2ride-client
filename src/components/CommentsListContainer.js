import React from 'react'
import {loadComments, deleteComment} from '../actions/comments'
import {connect} from 'react-redux'
import CommentsList from './CommentsList'
import CreateCommentFormContainer from './CreateCommentFormContainer'

class CommentsListContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.loadComments(Number(this.props.props.match.params.eventId), Number(this.props.props.match.params.ticketId))
  }

  deleteCommentWithId = (id) => {
    this.props.deleteComment(id)
    console.log((`/events/${this.props.props.match.params.eventId}/tickets/${this.props.props.match.params.ticketId}`))
    console.log(this.props)
    this.props.props.history
      .push(`/events/${this.props.props.match.params.eventId}/tickets/${this.props.props.match.params.ticketId}`)
    
  }

  render() {
    console.log(this.props, 'statetoprops')
    console.log(this.state)
    if (!this.props.comments) return null
    return (
      <React.Fragment>
        <CommentsList
          comments={this.props.comments}
          onDelete={this.deleteCommentWithId}
          authenticated={this.props.authenticated}
        />
        {this.props.authenticated && <CreateCommentFormContainer props={this.props}/>}
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  authenticated: !!state.currentUser
})

export default connect(mapStateToProps, {loadComments, deleteComment})(CommentsListContainer)
