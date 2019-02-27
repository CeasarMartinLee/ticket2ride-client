import {combineReducers} from 'redux'
import currentUser from './currentUser'
import events from './events'
import event from './event'
import tickets from './tickets'





export default combineReducers({
  currentUser,
  events,
  event,
  tickets
})
