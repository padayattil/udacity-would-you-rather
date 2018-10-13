import { RECEIVE_USERS } from '../actions/users';
import { UPDATE_POLL_ANSWER } from '../actions/polls';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_POLL_ANSWER:
      const answers = Object.assign(
          {},
          state[action.user_id].answers,
          {[action.poll_id]: action.answer}
      );
      const user = {
        ...state[action.user_id],
        answers
      }
      return {
        ...state,
        ...{[action.user_id]: user}
      }
    default:
      return state
  }
}
