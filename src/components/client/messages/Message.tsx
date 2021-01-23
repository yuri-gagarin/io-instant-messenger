import React from "react";
// css imports //
import style from "./css/message.module.css";

type Sender = "vendor" | "user";
type Props = {
  messageData: string;
  sender?: Sender;
}

const Message: React.FC<Props> = ({ messageData }) => {

  return (
    <div className={ style.messageDiv }>
      <div className={ style.messageContent }>
        { messageData }
      </div>
    </div>
  );
};

export default Message;