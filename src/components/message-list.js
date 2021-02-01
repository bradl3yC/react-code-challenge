import React from 'react';
import Api from '../api';
import MessageColumn from './MessageColumn';
import { MessagesWrapper, ButtonWrapper, Button } from './styles';

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
    };
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message);
    },
  })

  componentDidMount() {
    this.api.start();
  }

  messageCallback = (message) => {
    const { messages } = this.state;
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    });
  }

  clearClicked = () => {
    this.api.stop();
    this.setState({ messages: [] });
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  }

  clearMessage = (messageId) => {
    const messages = this.state.messages.filter((message) => message.id !== messageId);
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;
    const isApiStarted = this.api.isStarted();
    const errorMessages = messages.filter((message) => message.priority === 1).reverse();
    const warningMessages = messages.filter((message) => message.priority === 2).reverse();
    const infoMessages = messages.filter((message) => message.priority === 3).reverse();
    return (
      <div>
        <ButtonWrapper>
          <Button
            onClick={this.handleClick}
          >
            {isApiStarted ? 'STOP' : 'START'}
          </Button>
          <Button onClick={this.clearClicked}>CLEAR</Button>
        </ButtonWrapper>
        <MessagesWrapper>
          <MessageColumn color="#F56236" messages={errorMessages} heading="Error Type 1" clearMessage={this.clearMessage} />
          <MessageColumn color="#FCE788" messages={warningMessages} heading="Warning Type 2" clearMessage={this.clearMessage} />
          <MessageColumn color="#88FCA3" messages={infoMessages} heading="Info Type 3" clearMessage={this.clearMessage} />

        </MessagesWrapper>
      </div>
    );
  }
}

export default MessageList;
