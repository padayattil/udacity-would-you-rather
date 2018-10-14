import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollList from './PollList';

class PollBoard extends Component {
  state = {
    pollType: 'unanswered',
  }

  selectPollType(e, pollType) {
    e.preventDefault();
    this.setState(state => ({...state, pollType}));
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
              onClick={(e)=> this.selectPollType(e, 'unanswered')}>Unanswered</a>
          </li>
          <li className="nav-item">
            <a
              className={this.state.pollType === 'answered' ? "nav-link active" : "nav-link"}
              href="#answered"
              onClick={(e)=> this.selectPollType(e, 'answered')}>Answered</a>
          </li>
        </ul>
        {polls.length === 0 ? <div>No Polls to Show</div> : <PollList polls={polls} />}
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
