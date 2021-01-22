import React from "react";
// additional components //
import SendMessageBtn from "../buttons/SendMessageBtn";
// css and styles //
import style from "./css/messageInput.module.css";

const MessageInput: React.FC<{}> = ({}) => {
  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // handle send event //
    };
  }
  return (
    <div className={ style.messagesInputDiv }>
      <div className={ style.messagesInputSpan }>
        <input className={ style.messagesInputTag } onKeyPress={ keyPress }></input>
        <SendMessageBtn text="Send" />
      </div>
    </div>
  );
};

export default MessageInput;

