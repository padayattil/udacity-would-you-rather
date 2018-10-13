import React from 'react';

import { getScore } from '../utils/common';

const LeaderListItem = (props) => {
  return (
    <div className="container card card-item">
      <div className="row">
        <div className="col col-md-2 p-0">
          <img src={props.user.avatarURL} className="float-left rounded avatar-image" alt="avatar" />
        </div>
        <div className="col p-0">
          <div>
            <h4>{props.user.name}</h4>
            <p>Answered Polls {Object.keys(props.user.answers).length}</p>
            <hr/>
            <p>Created Polls {props.user.questions.length}</p>
          </div>
        </div>
        <div className="col col-md-2 p-0 card">
          <p className="font-weight-bold">Score</p>
          <p className="display-1">{getScore(props.user)}</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderListItem;
