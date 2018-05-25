import React from 'react';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="messaging-wrapper">
        <div className="logo-container">
          <img className="messaging-logo" src="assets/images/logo.png" alt="logo" />
        </div>
        <div className="channels-container">
        </div>
        <MessageList />
      </div>
    </div>
  );
};

export default App;
