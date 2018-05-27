import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
  return (
    <div className={props.currentUser === props.message.author ? 'message-container message-right' : 'message-container message-left'}>
      <i>
        {props.message.author}
        <small>{props.message.created_at}</small>
      </i>
      <p>{props.message.content}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}


export default connect(mapStateToProps)(Message);
