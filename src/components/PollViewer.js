import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isEmpty } from '../utils/common';

class PollViewer extends Component {

  state = {
    selectedAnswer: "optionOne"
  }

  onSelectAnswer() {
    this.setState((state) => ({
      selectedAnswer: this.state.selectedAnswer === "optionOne" ? "optionTwo" : "optionOne"
    }));
  }

  answerPoll(poll) {
      console.log(this.state.selectedAnswer);
      console.log(poll);
  }

  render() {
    if(isEmpty(this.props.polls) || isEmpty(this.props.users))
      return <div>Loading Poll</div>;

    const poll = this.props.polls[this.props.match.params.poll_id]
    return (
      <div className="container card card-item">
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
                  checked={this.state.selectedAnswer === "optionOne"} onChange={() => this.onSelectAnswer()} />{poll.optionOne.text}<br/>
                <input type="radio" name="optionTwo" value="optionOne"
                  checked={this.state.selectedAnswer === "optionTwo"} onChange={() => this.onSelectAnswer()} />{poll.optionTwo.text}<br/>
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

export default connect(mapStateToProps)(PollViewer);
