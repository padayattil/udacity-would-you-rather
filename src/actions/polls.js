import * as API from '../utils/_DATA'

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const UPDATE_POLL_ANSWER = 'UPDATE_POLL_ANSWER';
export const ADD_NEW_POLL = 'ADD_NEW_POLL';

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function updatePollAnswer(user_id, poll_id, answer) {
  return {
    type: UPDATE_POLL_ANSWER,
    user_id,
    poll_id,
    answer
  }
}

export function answerPoll(authedUser, qid, answer, history) {
  return (dispatch) => {
    API._saveQuestionAnswer({authedUser, qid, answer})
      .then(() => dispatch(updatePollAnswer(authedUser, qid, answer)))
      .then(() => history.push(`/poll/${qid}/results`));
  }
}

export function addNewPoll(poll) {
  return {
    type: ADD_NEW_POLL,
    poll
  }
}

export function createPoll(optionOneText, optionTwoText, author, history) {
  return (dispatch) => {
    API._saveQuestion({optionOneText, optionTwoText, author})
      .then((poll) => dispatch(addNewPoll(poll)))
      .then(() => alert('Created new poll!'))
      .then(() => history.push(`/`));
  }
}
