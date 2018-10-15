import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PollDetail from './components/PollDetail';
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
      return <Redirect to={`/login?redirect=${this.props.location.pathname}`} />;
    }
    if (this.props.location.pathname === '/login' && this.props.authedUser !== null) {
      const queryParams = queryString.parse(this.props.location.search);
      if (queryParams.redirect) {
        return <Redirect to={queryParams.redirect} />;
      }
    }

    return (
      <div className="App">
        <Header />
        <div className="PageContainer p-5">
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/questions/:poll_id' render={(props) => (
            <PollDetail {...props} />
          )} />
          <Route exact path='/add' render={(props) => (
            <PollCreator {...props} />
          )} />
          <Route exact path='/leaderboard' render={() => (
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
