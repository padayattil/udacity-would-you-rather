import React from 'react';
import { connect } from 'react-redux';

const PollListItem = (props) => {
  const avatarImgStyle = {
    width: "180px",
    paddingTop: "100%",
    backgroundImage: "url(" + props.users[props.author].avatarURL + ")",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div className="poll-card card">
      <div className="card-header text-left">
        Featured
      </div>
      <div className="row poll-card-body">
        <div className="col-md-auto" style={avatarImgStyle}></div>
        <div className="col-md-auto">
          <div className="card-block px-2 text-left">
            <h4 className="card-title">Would you rather</h4>
            <p className="card-text">{props.optionOne.text.slice(0,20)+'... or '+props.optionTwo.text.slice(0,20)+'...'}</p>
            <a href="/foo" className="btn btn-primary">View Poll</a>
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
