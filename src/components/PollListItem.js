import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PollListItem = (props) => {
  return (
    <div className="container card card-item">
      <div className="row">
        <div className="col col-md-2 p-0">
          <img src={props.users[props.author].avatarURL} className="float-left rounded avatar-image" alt="avatar" />
        </div>
        <div className="col p-0">
          <div>
            <h4>Would you rather</h4>
            <p>{`${props.optionOne.text.slice(0,20)}... or ${props.optionTwo.text.slice(0,20)} ...`}</p>
            <hr/>
            <Link className="btn btn-primary" to={`/poll/${props.id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(PollListItem);
