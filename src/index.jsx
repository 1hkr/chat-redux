// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch }from 'react-router-dom';
import { createHistory as history } from 'history';

import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import identityReducer from './reducers/identity_reducer';
import messagesReducer from './reducers/messages_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
const initialState = {
  messages: { messages: [] },
  channels: ['Main', 'Events', 'Lolex'],
  currentUser: prompt("What's your id?") || `anonymous${Math.floor(Math.random() * 100)}`
  // currentUser: prompt("What's your id?") ||,
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/Main" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
