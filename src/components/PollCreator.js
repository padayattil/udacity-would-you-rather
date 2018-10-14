import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pollActions from '../actions/polls';

class PollCreator extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleInputChange(text, optionTextKey) {
    this.setState(() => (
      {...this.state, ...{[optionTextKey]: text}}
    ));
  }

  handleCreatePoll(e) {
    e.preventDefault();
    this.props.actions.createPoll(
      this.state.optionOneText,
      this.state.optionTwoText,
      this.props.authedUser,
      this.props.history
    );
  }

  render() {
    return (
      <div className="poll-card card">
        <div className="card-header text-center">
          Create New Poll
        </div>
        <form>
          <div className="form-group text-left">
            <label>Would you rather ...</label>
            <input type="text" value={this.state.optionOneText} onChange={(e) => this.handleInputChange(e.target.value, "optionOneText")} className="form-control" id="pollOption1" placeholder="Enter option one" />
            <div className='hr'>
                <span className='hr-title'>Or</span>
            </div>
            <input type="text" value={this.state.optionTwoText} onChange={(e) => this.handleInputChange(e.target.value, "optionTwoText")} className="form-control" id="pollOption2" placeholder="Enter option two" />
          </div>
          {
            Boolean(this.state.optionOneText && this.state.optionTwoText) ?
              <button type="submit" className="btn btn-primary" onClick={(e) => this.handleCreatePoll(e)}>Submit</button>
            :
              <button type="submit" className="btn btn-primary disabled" onClick={(e) => e.preventDefault()}>Submit</button>
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pollActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PollCreator);
