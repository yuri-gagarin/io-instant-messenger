import React, { useState, useRef } from "react";
// additional components //
import SendMessageBtn from "../buttons/SendMessageBtn";
// css and styles //
import style from "./css/messageInput.module.css";

interface Props {
  sendMessage(messageData: string): void;
}

const MessageInput: React.FC<Props> = ({ sendMessage }) => {
  const [ messageData, setMessageData ] = useState<string>("");
  const textAreaRef = useRef(document.createElement('textarea'));

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // handle send event //
      if (messageData.trim().length === 0) {
        return;
      }
      sendMessage(messageData);
      textAreaRef.current.value = "";
    }
  }
  const listenForMessageInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageData(e.target.value);
  }
 
  const sendMessageData = () => {
    sendMessage(messageData);
    setMessageData("");
  }
  const onFocus = () => {
  }
  return (
    <div className={ style.messagesInputDiv }>
      <div className={ style.messagesInputSpan }>
        <textarea 
          ref={ textAreaRef }
          className={ style.messagesTextAreaTag } 
          onKeyPress={ keyPress }
          onFocus={ onFocus }
          onChange={ listenForMessageInputChange }
        >
          
        </textarea>
        <SendMessageBtn text="Send" onClick={sendMessageData} />
      </div>
    </div>
  );
};

export default MessageInput;

