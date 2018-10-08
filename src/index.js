import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import RootReducer from './reducers';
import middleware from './middleware';

const store = createStore(RootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><Route render={(props) => <App location={props.location} history={props.history} />} /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
