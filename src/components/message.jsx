import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container">
      <i>
        {props.message.author}
        <small>{props.message.created_at}</small>
      </i>
      <p>{props.message.content}</p>
    </div>
  );
};


export default Message;
