import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 1000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>
            <h3>{this.props.messages.channel}</h3>
          </span>
        </div>

        <div className="channel-content" ref={(list) => { this.list = list; }}>
          { this.props.messages.messages.map(
            message => <Message message={message} key={message.content} />)}
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
