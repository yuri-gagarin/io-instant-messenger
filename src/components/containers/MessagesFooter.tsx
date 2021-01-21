import React from "react";
// styles //
import styles from "./css/messagesFooter.css";

type MessagesFooterProps = {
  title: string;
}
type MessagesFooterState = {
  totalConversations: number;
  read: boolean;
}

class MessagesFooter extends React.Component<MessagesFooterProps, MessagesFooterState> {
  state: MessagesFooterState = {
    totalConversations: 0,
    read: true
  }

  render() {
    return (
      <div className={styles.footerContainer}>
        <div className="messageContainerTitle">{ this.props.title }</div>

      </div>
    )
  }
}

export default MessagesFooter;