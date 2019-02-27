import request from 'superagent'

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'
export const COMMENT_DELETE_SUCCESS = 'COMMENT_DELETE_SUCCESS'

const baseUrl = 'http://localhost:4010'

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  payload: comments
})

const commentCreateSuccess = comment => ({
  type: COMMENT_CREATE_SUCCESS,
  payload: comment
})

const commentDeleteSuccess = id => ({
  type: COMMENT_DELETE_SUCCESS,
  id
})

export const loadComments = (event_id,ticket_id) => (dispatch) => {

  request(`${baseUrl}/events/${event_id}/tickets/${ticket_id}/comments`)
    .then(response => {
      console.log(response.body, 'response')
      dispatch(commentsFetched(response.body))
    })
    .catch(console.error)
}

export const createComment = (data, event_id, ticket_id) => (dispatch, getState) => {
  const jwt = getState().currentUser

  request
    .post(`${baseUrl}/events/${event_id}/tickets/${ticket_id}/comments`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      console.log(response)
      dispatch(commentCreateSuccess(response.body))
    })
    .catch(console.error)
}


export const deleteComment = (id) => (dispatch, getState) => {
  const jwt = getState().currentUser

  request
    .delete(`${baseUrl}/comments/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch(commentDeleteSuccess(id))
    })
    .catch(console.error)
}

