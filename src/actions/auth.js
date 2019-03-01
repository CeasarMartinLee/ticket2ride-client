import request from 'superagent'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'
export const LOGOUT = 'LOGOUT'

const baseUrl = 'http://localhost:4010'

const loginSuccess = jwt => ({
  type: LOGIN_SUCCESS,
  jwt
})

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error
})

const registerSuccess = () => ({
  type: REGISTER_SUCCESS
})

const registerFailed = error => ({
  type: REGISTER_FAILED,
  payload: error
})

export const logout = () => ({
  type: LOGOUT
})

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      dispatch(loginSuccess(response.body.jwt))
    })
    .catch(error => {
      if (error.status === 400) {
        dispatch(loginFailed(error.response.body.message));
      } else console.error(error);
    })
}

export const registerUser = (firstName, lastName, email, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({firstName, lastName, email, password})
    .then(response => {
      console.log(response)
      dispatch(registerSuccess(response.body.jwt))
    })
    .catch(error => {
      if (error.status === 400) {
        dispatch(registerFailed(error.response.body.message));
      } else console.error(error);
    })
}