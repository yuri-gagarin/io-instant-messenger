import React from "react";

type MessageConCompProps = {
  title: string;
}
type MessageConCompState = {
  totalMessages: number;
  read: boolean;
}
class MessageContainerComponent extends React.Component<MessageConCompProps, MessageConCompState> {
  state: MessageConCompState = {
    totalMessages: 0,
    read: true
  }

  render() {
    return (
      <div style={{ height: "200px", width: "150px", border: "2px solid black" }}>
        <div className="messageContainerTitle">{ this.props.title }</div>

      </div>
    )
  }
}

export default MessageContainerComponent;