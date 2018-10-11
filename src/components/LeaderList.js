import React from 'react';
import { connect } from 'react-redux';

import LeaderListItem from './LeaderListItem';
import { get_score } from '../utils/common';

const LeaderList = (props) => {
  return (
  <div>
    {props.users.map(user => <LeaderListItem key={user.id} user={user} />)}
  </div>
);}

const mapStateToProps = (state) => ({
  users: Object.values(state.users)
    .sort(
      (user1, user2) => (get_score(user1) < get_score(user2))
    )
})

export default connect(mapStateToProps)(LeaderList);
