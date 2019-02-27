import { COMMENTS_FETCHED, COMMENT_CREATE_SUCCESS, COMMENT_DELETE_SUCCESS } from '../actions/comments'

export default (state = null, action = {}) => {


  switch(action.type) {
    case COMMENTS_FETCHED :
    console.log(state, 'reducer')
    console.log(action.payload, 'reducer')
      return action.payload.comments

    case COMMENT_CREATE_SUCCESS :
    console.log(state)
    console.log(action)
    console.log([ ...state, action.payload ])
      return [ ...state, action.payload ]

    case COMMENT_DELETE_SUCCESS :
    console.log(state, 'delete state')
    console.log(action, 'delete action')
      return state.filter(ev => ev.id !== action.id)

    default :
      return state
  }
}
