import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4010'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
})

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
})

const eventFetched = event => ({
    type: EVENT_FETCHED,
    payload: event
  })

const eventDeleteSuccess = id => ({
  type: EVENT_DELETE_SUCCESS,
  id
})

const eventUpdateSuccess = event => ({
    type: EVENT_UPDATE_SUCCESS,
    event
  })

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  // console.log(getState().events, 'getstate load events')
//   if (getState().events) return
    // const jwt = getState().currentUser


  // a GET /events request
  request(`${baseUrl}/events`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
        console.log(response.body, 'response')
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const createEvent = (data) => (dispatch, getState) => {
    const jwt = getState().currentUser
    console.log(data)

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
        console.log(response)
        // delete response.body.user
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch, getState) => {
    const jwt = getState().currentUser

    
    request(`${baseUrl}/events/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
          console.log(response)
        dispatch(eventFetched(response.body))
    })
      .catch(console.error)
  }

  export const updateEvent = (id, data) => (dispatch, getState) => {
    const jwt = getState().currentUser

    request
        .put(`${baseUrl}/events/${id}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
        dispatch(eventUpdateSuccess(response.body))
      })
      .catch(console.error)
  }

export const deleteEvent = (id) => (dispatch, getState) => {
    const jwt = getState().currentUser

  request
    .delete(`${baseUrl}/events/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(eventDeleteSuccess(id))
    })
    .catch(console.error)
}


