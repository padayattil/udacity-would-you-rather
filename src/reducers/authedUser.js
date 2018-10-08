import { LOGIN } from '../actions/authedUser'
import { LOGOUT } from '../actions/authedUser'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.user_id
    case LOGOUT:
      return null
    default:
      return state
  }
}
