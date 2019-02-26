// src/reducers/events.js
import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCESS } from '../actions/events'

export default (state = null, action = {}) => {


  switch(action.type) {
    case EVENTS_FETCHED :
    console.log(state, 'reducer')
    console.log(action.payload, 'reducer')
      return action.payload.events

    case EVENT_CREATE_SUCCESS :
    console.log(state)
    console.log(action)
    console.log([ ...state, action.payload ])
      return [ ...state, action.payload ]

    case EVENT_DELETE_SUCCESS :
    console.log(state, 'delete state')
    console.log(action, 'delete action')
      return state.filter(ev => ev.id !== action.id)

    default :
      return state
  }
}
