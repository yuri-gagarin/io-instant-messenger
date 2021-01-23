import React, { useEffect, useRef } from "react";
// additonal components //
import Message from "./Message";
// css imports //
import styles from "./css/messagesWindow.css";

type Props = {
  messages: string[];
}


const MessagesWindow: React.FC<Props> = ({ messages }) => {
  const messagesWindowRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (messagesWindowRef.current) {
      const messagesWindow = messagesWindowRef.current;
      messagesWindow.scrollTop = messagesWindow.scrollHeight;
    }
  }, [messagesWindowRef.current, messagesWindowRef.current?.scrollHeight]);

  return (
    <div className={ styles.messagesWindowContainer } ref={ messagesWindowRef }>
      {
        messages.map((messageData, index) => <Message key={index} messageData={messageData} />)
      }
    </div>
  );
};

export default MessagesWindow;