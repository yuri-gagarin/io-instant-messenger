import React from "react";
// additonal components //
import Message from "./Message";
// css imports //
import styles from "./css/messagesWindow.css";

type Props = {
  messages: string[];
}

const MessagesWindow: React.FC<Props> = ({ messages }) => {

  return (
    <div className={ styles.messagesWindowContainer }>
      {
        messages.map((messageData, index) => <Message key={index} messageData={messageData} />)
      }
    </div>
  );
};

export default MessagesWindow;