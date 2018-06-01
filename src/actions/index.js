// Actions

// actions to receive messages
export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

// action to send a message
export function createMessage(channel, author, content) {
  const promise = fetch(
    `https://wagon-chat.herokuapp.com/${channel}/messages`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author, content })
    }
  ).then(r => r.json());


  return {
    type: 'MESSAGE_POSTED',
    payload: promise
  };
}
