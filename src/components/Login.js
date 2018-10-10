import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authedUser from '../actions/authedUser';

class Login extends Component {

  state = {
    selectedUserId: null
  }

  componentDidMount() {
    if (this.props.authedUser !== null)
      this.props.history.push('/');
  }

  componentDidUpdate() {
    if (this.props.authedUser !== null)
      this.props.history.push('/');
  }

  handleUserSelect(user_id) {
    if (user_id !== 'default')
      this.setState((state) => ({selectedUserId: user_id}));
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.actions.login(this.state.selectedUserId);
  }

  render() {
    return (
      <div className="Login">
        <form>
          <div className="form-group">
            <select className="custom-select" defaultValue="default" onChange={e => this.handleUserSelect(e.target.value)}>
              <option key="default" value="default">Select User</option>
              {
                this.props.users.map((user) => {
                  return (
                    this.state.selectedUserId === user.id ?
                      <option key={user.id} selected value={user.id} type="button">{user.name}</option>
                        :
                      <option key={user.id} value={user.id} type="button">{user.name}</option>
                  )}
                )
              }
            </select>
          </div>
          <button className="btn btn-primary" disabled={this.state.selectedUserId === null} onClick={(e) => this.handleLogin(e)}>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: Object.values(state.users),
    authedUser: state.authedUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authedUser, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
