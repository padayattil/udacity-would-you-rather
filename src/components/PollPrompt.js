import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pollActions from '../actions/polls';
import { isEmpty } from '../utils/common';

class PollPrompt extends Component {

  state = {
    selectedAnswer: "optionOne"
  }

  onSelectAnswer() {
    this.setState((state) => ({
      selectedAnswer: this.state.selectedAnswer === "optionOne" ? "optionTwo" : "optionOne"
    }));
  }

  answerPoll(poll) {
      this.props.actions.answerPoll(
        this.props.authedUser,
        poll.id,
        this.state.selectedAnswer,
        this.props.history
      );
  }

  render() {
    if(isEmpty(this.props.polls) || isEmpty(this.props.users))
      return <div>Loading Poll</div>;

    const poll = this.props.polls[this.props.match.params.poll_id]

    if(this.props.users[this.props.authedUser].answers[poll.id])
      this.props.history.push(`/poll/${poll.id}/results`);

    return this.props.users[this.props.authedUser].answers[poll.id] ? <div>Loading results...</div> : (
      <div className="container card card-item">
        <div className="row border bg-light p-10">
          <p className="font-weight-bold">{`${this.props.users[poll.author].name} asks:`}</p>
        </div>
        <div className="row">
          <div className="col col-md-2 p-0">
            <img
              src={this.props.users[poll.author].avatarURL}
              className="float-left rounded avatar-image" alt="avatar" />
          </div>
          <div className="col p-0">
            <div>
              <h4>Would you rather</h4>
              <form>
                <input type="radio" name="optionOne" value="optionOne"
                  checked={this.state.selectedAnswer === "optionOne"} onChange={() => this.onSelectAnswer()} /> {poll.optionOne.text}<br/>
                <input type="radio" name="optionTwo" value="optionOne"
                  checked={this.state.selectedAnswer === "optionTwo"} onChange={() => this.onSelectAnswer()} /> {poll.optionTwo.text}<br/>
              </form>
              <button className="btn btn-primary" onClick={() => this.answerPoll(poll)}>Submit</button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PollPrompt);
