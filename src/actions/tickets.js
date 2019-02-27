import request from 'superagent'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'
export const TICKET_FETCHED = 'TICKET_FETCHED'
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'
export const TICKET_DELETE_SUCCESS = 'TICKET_DELETE_SUCCESS'
export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4010'

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  payload: tickets
})

const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  payload: ticket
})

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  payload: ticket
})

const ticketDeleteSuccess = id => ({
  type: TICKET_DELETE_SUCCESS,
  id
})

const ticketUpdateSuccess = ticket => ({
  type: TICKET_UPDATE_SUCCESS,
  ticket
})

export const loadTickets = (event_id) => (dispatch) => {

  request(`${baseUrl}/events/${event_id}/tickets`)
    .then(response => {
      console.log(response.body, 'response')
      dispatch(ticketsFetched(response.body))
    })
    .catch(console.error)
}

export const createTicket = (data, event_id) => (dispatch, getState) => {
  const jwt = getState().currentUser
  console.log(data)
  const newData = data
  newData.price = parseInt(newData.price)


  request
    .post(`${baseUrl}/events/${event_id}/tickets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(newData)
    .then(response => {
      console.log(response)
      dispatch(ticketCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadTicket = (event_id,ticket_id) => (dispatch, getState) => {
  const jwt = getState().currentUser

  request(`${baseUrl}/events/${event_id}/tickets/${ticket_id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      console.log(response)
      dispatch(ticketFetched(response.body))
    })
    .catch(console.error)
}

// export const loadTicket = (id) => (dispatch, getState) => {
//   const jwt = getState().currentUser


//   request(`${baseUrl}/tickets/${id}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(response => {
//       console.log(response)
//       dispatch(ticketFetched(response.body))
//     })
//     .catch(console.error)
// }

export const deleteTicket = (id) => (dispatch, getState) => {
  const jwt = getState().currentUser

  request
    .delete(`${baseUrl}/tickets/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(ticketDeleteSuccess(id))
    })
    .catch(console.error)
}

export const updateTicket = (id, data) => (dispatch, getState) => {
  const jwt = getState().currentUser

  request
    .patch(`${baseUrl}/tickets/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(ticketUpdateSuccess(response.body))
    })
    .catch(console.error)
}