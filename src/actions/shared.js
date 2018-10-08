import * as API from '../utils/_DATA';
import { receivePolls } from './polls';
import { receiveUsers } from './users';

export function getInitialData() {
  return (dispatch) => {
    API._getUsers()
      .then(users => dispatch(receiveUsers(users)));
    API._getQuestions()
      .then(polls => dispatch(receivePolls(polls)));
  }
}
