import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PollPrompt from './components/PollPrompt';
import PollResults from './components/PollResult';
import PollCreator from './components/PollCreator';
import LeaderBoard from './components/LeaderBoard';
import Login from './components/Login';
import { getInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  render() {
    if (this.props.location.pathname !== '/login' && this.props.authedUser === null) {
      this.props.history.push(`/login?redirect=${this.props.location.pathname}`);
      return <div>Redirecting to login!</div>;
    }
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === '/login' && this.props.authedUser !== null) {
      const queryParams = queryString.parse(this.props.location.search);
      if (queryParams.redirect) {
        this.props.history.push(queryParams.redirect);
        return <div>Redirecting..</div>;
      }
    }

    return (
      <div className="App">
        <Header />
        <div className="PageContainer p-5">
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/poll/:poll_id' render={(props) => (
            <PollPrompt {...props} />
          )} />
          <Route exact path='/poll/:poll_id/results' render={(props) => (
            <PollResults {...props} />
          )} />
          <Route exact path='/create-poll' render={(props) => (
            <PollCreator {...props} />
          )} />
          <Route exact path='/leader-board' render={() => (
            <LeaderBoard />
          )} />
          <Route path='/login' render={(props) => (
            <Login {...props} />
          )} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser
});

export default connect(mapStateToProps)(App);
