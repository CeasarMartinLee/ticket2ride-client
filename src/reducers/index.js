import {combineReducers} from 'redux'
import currentUser from './currentUser'
import events from './events'
import event from './event'




export default combineReducers({
  currentUser,
  events,
  event
})
