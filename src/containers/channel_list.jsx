import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li
        key={channel}
      >
        <Link to={`/${channel}`} className={channel === this.props.channelFromParams ? 'active' : null} >
          {channel}
        </Link>
      </li>
    );
  }


  render() {
    return (
      <div className="channels-container hidden-xs">
        <ul>
          { this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
