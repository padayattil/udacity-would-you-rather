import { RECEIVE_POLLS, UPDATE_POLL_ANSWER, ADD_NEW_POLL } from '../actions/polls';

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    case UPDATE_POLL_ANSWER:
      const optionData = {
        ...state[action.poll_id][action.answer],
        votes: [...state[action.poll_id][action.answer].votes, action.user_id]
      }
      const poll = {
        ...state[action.poll_id],
        ...{[action.answer]: optionData}
      }
      return {
        ...state,
        ...{[action.poll_id]: poll}
      }
    case ADD_NEW_POLL:
      return {
        ...state,
        ...{[action.poll.id]: {...action.poll}}
      }
    default:
      return state
  }
}
