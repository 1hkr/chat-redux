import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="messaging-wrapper">
        <div className="logo-container">
          <img className="messaging-logo" src="assets/images/logo.png" alt="logo" />
        </div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
