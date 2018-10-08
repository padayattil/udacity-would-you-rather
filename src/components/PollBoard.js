import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollList from './PollList';

class PollBoard extends Component {
  state = {
    pollType: 'answered'
  }

  handlePollTypeToggle() {
    this.setState(state => Object.assign({}, state, {pollType: state.pollType === 'unanswered' ? 'answered': 'unanswered'}))
  }

  render() {
    return (
      <div className="PollBoard">
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
        <PollList polls={Object.values(this.props.polls)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  polls: state.polls
})

export default connect(mapStateToProps)(PollBoard);
