import React from 'react';

import PollListItem from './PollListItem';

const PollList = (props) => {
  const polls = [...props.polls].sort((poll1, poll2) => poll1.timestamp < poll2.timestamp )
  return (
    <div className="PollList">
      {polls.map(poll => <PollListItem key={poll.id} {...poll} />)}
    </div>
  );
};

export default PollList;
