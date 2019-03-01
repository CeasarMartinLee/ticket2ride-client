import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/auth'

export default function(state = {}, { type, payload }) {
  switch (type) {
    case REGISTER_SUCCESS:
    console.log(state)
    console.log(type)
    console.log(payload)
      return {
        success: true
      }
    case REGISTER_FAILED:
      return {
        error: payload
      }
    default:
      return state;
  }
}
