import React from 'react';

import PollListItem from './PollListItem';

const PollList = (props) => (
  <div className="PollList">
    {props.polls.map(poll => <PollListItem key={poll.id} {...poll} />)}
  </div>
);

export default PollList;
