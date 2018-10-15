import React from 'react';
import { connect } from 'react-redux';

import PollPrompt from './PollPrompt';
import PollResult from './PollResult';

const PollDetail = (props) => (
  props.users[props.authedUser].answers[props.match.params.poll_id] ? <PollResult {...props} /> : <PollPrompt {...props} />
);

const mapStateToProps = (state) => ({
  users: state.users,
  authedUser: state.authedUser
});

export default connect(mapStateToProps)(PollDetail);
