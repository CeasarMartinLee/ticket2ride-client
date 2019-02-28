import { RISK_FETCHED } from '../actions/tickets'

export default (state = null, action = {}) => {
  switch (action.type) {
    case RISK_FETCHED:
      return action.payload;
    default:
      return state
  }
};
