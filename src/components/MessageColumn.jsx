import React from 'react';
import { MessageCard, CardButton, MessageColumnContent } from './styles';

const MessageColumn = ({
  messages, heading, clearMessage, color,
}) => (
  <MessageColumnContent>
    <h3>{heading}</h3>
    <p>
      Count:
      {messages.length}
    </p>
    {messages.map((message) => (
      <MessageCard color={color} key={message.id}>
        <span>{message.message}</span>
        <CardButton color={color} onClick={() => clearMessage(message.id)}>Clear</CardButton>
      </MessageCard>
    ))}
  </MessageColumnContent>
);

export default MessageColumn;
