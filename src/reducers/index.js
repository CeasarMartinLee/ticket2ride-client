import {combineReducers} from 'redux'
import currentUser from './currentUser'
import events from './events'
import event from './event'
import tickets from './tickets'
import ticket from './ticket'
import comments from './comments'



export default combineReducers({
  currentUser,
  events,
  event,
  tickets,
  ticket,
  comments
})
