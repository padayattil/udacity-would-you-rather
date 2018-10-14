import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pollActions from '../actions/polls';
import { isEmpty } from '../utils/common';
import NotFound from './NotFound';

class PollResults extends Component {

  state = {
    selectedAnswer: "optionOne"
  }

  render() {
    if (isEmpty(this.props.users) || isEmpty(this.props.polls))
      return <div>Loading Results</div>;
    const poll = this.props.polls[this.props.match.params.poll_id];
    if (!Boolean(poll))
      return <NotFound />;
    const optionOneVotes = poll.optionOne.votes.length;
    const optionTwoVotes = poll.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOneVotePC = (optionOneVotes*100)/totalVotes;
    const optionTwoVotePC = 100 - optionOneVotePC;

    const avatarStyle = {
      backgroundImage: `url('${this.props.users[poll.author].avatarURL}')`,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center"
    }
    const progressStyleOne = {
      width: `${optionOneVotePC}%`
    }
    const progressStyleTwo = {
      width: `${optionTwoVotePC}%`
    }
    return (
      <div className="container border col-md-6">
        <div className="row border bg-light p-10">
          <p className="font-weight-bold">{`Asked by ${this.props.users[poll.author].name}`}</p>
        </div>
        <div className="row">
          <div className="col col-md-2 border-right" style={avatarStyle}></div>
          <div className="col">
            <form>
              <fieldset className="d-flex align-items-center border">
                {
                  this.props.users[this.props.authedUser].answers[poll.id] === "optionOne" &&
                  <legend className="mr-0 p-0"><small>Your Vote</small></legend>
                }
                <div className="card border-0 d-flex align-items-center">
                  <p>Would you rather {poll.optionOne.text}</p>
                  <div className="progress position-relative w-75">
                    <div className="progress-bar" role="progressbar" style={progressStyleOne} aria-valuenow={optionOneVotePC} aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <small className="justify-content-center d-flex position-absolute w-100">{optionOneVotePC}%</small>
                  </div>
                  <p>{`${optionOneVotes} out of ${totalVotes} votes`}</p>
                </div>
              </fieldset>
            </form>
            <form className="my-10">
              <fieldset className="d-flex align-items-center border">
                {
                  this.props.users[this.props.authedUser].answers[poll.id] === "optionTwo" &&
                  <legend className="mr-0 p-0"><small>Your Vote</small></legend>
                }
                <div className="card border-0 d-flex align-items-center">
                  <p>Would you rather {poll.optionTwo.text}</p>
                  <div className="progress position-relative w-75">
                    <div className="progress-bar" role="progressbar" style={progressStyleTwo} aria-valuenow={optionTwoVotePC} aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <small className="justify-content-center d-flex position-absolute w-100">{optionTwoVotePC}%</small>
                  </div>
                  <p>{`${optionTwoVotes} out of ${totalVotes} votes`}</p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  polls: state.polls,
  authedUser: state.authedUser
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pollActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PollResults);
