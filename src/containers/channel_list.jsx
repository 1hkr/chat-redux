import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li>{channel}</li>
    );
  }


  render() {
    return (
      <div className="channels-container">
          <span>Super Chat</span>
            <ul>
              { this.props.channels.map(this.renderChannel)}
            </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList);
