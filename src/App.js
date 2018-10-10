import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PollViewer from './components/PollViewer';
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
      this.props.history.push('/login');
    }
    return (
      <div className="App">
        <Header />
        <div className="PageContainer p-5">
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route exact path='/poll/:id' render={() => (
            <PollViewer />
          )} />
          <Route exact path='/create-poll' render={() => (
            <PollCreator />
          )} />
          <Route exact path='/leader-board' render={() => (
            <LeaderBoard />
          )} />
          <Route path='/login' render={(props) => (
            <Login history={props.history} />
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
