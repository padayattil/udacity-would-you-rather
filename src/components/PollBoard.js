import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollList from './PollList';

class PollBoard extends Component {
  state = {
    pollType: 'unanswered',
  }

  handlePollTypeToggle() {
    this.setState(state => Object.assign({}, state, {pollType: state.pollType === 'unanswered' ? 'answered': 'unanswered'}))
  }

  render() {
    const polls = Object.values(this.props.polls).filter((poll) => {
      if (this.state.pollType === 'answered')
        return this.props.users.length !==0 && Boolean(this.props.users[this.props.authedUser].answers[poll.id])
      return this.props.users.length !==0 && !Boolean(this.props.users[this.props.authedUser].answers[poll.id])
    });
    return (
      <div className="card poll-board mx-auto">
        <ul className="nav nav-tabs justify-content-center nav-fill">
          <li className="nav-item">
            <a
              className={this.state.pollType === 'unanswered' ? "nav-link active" : "nav-link"}
              href="#unanswered"
              onClick={()=> this.handlePollTypeToggle()}>Unanswered</a>
          </li>
          <li className="nav-item">
            <a
              className={this.state.pollType === 'answered' ? "nav-link active" : "nav-link"}
              href="#answered"
              onClick={()=> this.handlePollTypeToggle()}>Answered</a>
          </li>
        </ul>
        <PollList polls={polls} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  polls: state.polls,
  authedUser: state.authedUser,
  users: state.users
})

export default connect(mapStateToProps)(PollBoard);
