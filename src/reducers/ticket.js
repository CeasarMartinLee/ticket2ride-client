// src/reducers/TICKETs.js
import { TICKET_FETCHED, TICKET_UPDATE_SUCCESS } from '../actions/tickets'

export default (state = null, action = {}) => {


  switch(action.type) {

    case TICKET_FETCHED :
    console.log(state)
    console.log(action)
      return action.payload

    case TICKET_UPDATE_SUCCESS:
    console.log(state)
    console.log(action)
    return action.ticket

    default :
      return state
  }
}
