import React from 'react';
import DATA from './DATA';

const ChatApp = () => {
  const chatItems = DATA.chats.map(function(item){
    return (
      <div>
        <h3> {item.username} </h3>
        <p> {item.chat} </p>
      </div>
    )
  })
  return (
    <div>
      <h3>Chat Apps are soo cool!</h3>
      <div className="chat-container">
        { chatItems }
      </div>
    </div>
  )
}

export default ChatApp;
