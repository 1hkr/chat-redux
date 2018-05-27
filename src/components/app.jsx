import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <div className="messaging-wrapper">
        <div className="logo-container">
          <div className="messaging-logo-container shadow">
            <img className="messaging-logo" src="http://res.cloudinary.com/djw1qzpwq/image/upload/v1527260758/Logo.png" alt="logo" />
          </div>
        </div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
