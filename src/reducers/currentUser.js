import {LOGIN_SUCCESS, LOGOUT} from '../actions/auth'

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.jwt

    case LOGOUT:
      return null
      
    default:
      return state;
  }
}
// export default function (state = null, action) {
//   if (action.type === LOGIN_SUCCESS) return action.jwt
//   return state
// }