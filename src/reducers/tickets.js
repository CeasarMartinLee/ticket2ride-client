import { TICKETS_FETCHED, TICKET_CREATE_SUCCESS, TICKET_DELETE_SUCCESS } from '../actions/tickets'

export default (state = null, action = {}) => {


  switch(action.type) {
    case TICKETS_FETCHED :
    console.log(state, 'reducer')
    console.log(action.payload, 'reducer')
      return action.payload.tickets

    case TICKET_CREATE_SUCCESS :
    console.log(state)
    console.log(action)
    console.log([ ...state, action.payload ])
      return [ ...state, action.payload ]

    case TICKET_DELETE_SUCCESS :
    console.log(state, 'delete state')
    console.log(action, 'delete action')
      return state.filter(ev => ev.id !== action.id)

    default :
      return state
  }
}
