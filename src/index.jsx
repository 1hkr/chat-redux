// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import identityReducer from './reducers/identity_reducer';
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
const initialState = {
  messages: { messages: [] },
  channels: ['general', 'douceur', 'lolo'],
  selectedChannel: 'douceur',
  currentUser: prompt("What's your id?") || `anonymous${Math.floor(Math.random() * 100)}`
  // currentUser: prompt("What's your id?") ||,
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
