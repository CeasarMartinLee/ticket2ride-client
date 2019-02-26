// src/reducers/events.js
import { EVENT_FETCHED, EVENT_UPDATE_SUCCESS } from '../actions/events'

export default (state = null, action = {}) => {


  switch(action.type) {

    case EVENT_FETCHED :
    console.log(state)
    console.log(action)
      return action.payload

    case EVENT_UPDATE_SUCCESS:
    console.log(state)
    console.log(action)
    return action.event

    default :
      return state
  }
}
