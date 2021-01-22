import React from "react";
// css imports //
import style from "./css/message.css";

type Props = {
  messageData: string;
}

const Message: React.FC<Props> = ({ messageData }) => {

  return (
    <div className={ style.messageDiv }>
      { messageData }
    </div>
  );
};

export default Message;