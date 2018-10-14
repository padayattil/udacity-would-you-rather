import { RECEIVE_USERS } from '../actions/users';
import { UPDATE_POLL_ANSWER, ADD_NEW_POLL } from '../actions/polls';

export default function users(state = {}, action) {
  let user;
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
      user = {
        ...state[action.user_id],
        answers
      }
      return {
        ...state,
        ...{[action.user_id]: user}
      }
    case ADD_NEW_POLL:
      user = {
        ...state[action.poll.author],
        ...{questions: [...state[action.poll.author].questions, action.poll.id]}
      }
      return {
        ...state,
        ...{[action.poll.author]: user}
      }
    default:
      return state
  }
}
