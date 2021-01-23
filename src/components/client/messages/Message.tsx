import React, { useEffect, useState } from "react";
// additional type definitions //
import { MessageData } from "./custom_types/typeDeclratations";
// css imports //
import style from "./css/message.module.css";

interface Props {
  messageData: MessageData;
}
type LocalState = {
  positionCSS: string;
}
const Message: React.FC<Props> = ({ messageData }) => {
  const { sender } = messageData;
  const [ customMessageStyle, setCustomMessageStyle ] = useState<LocalState>({ positionCSS: "" });

  useEffect(() => {
    if (sender === "user") {
      setCustomMessageStyle({ positionCSS: style.userMessage });
    };
    if (sender === "vendor") {
      setCustomMessageStyle({ positionCSS: style.vendorMessage });
    }
  }, []);

  return (
    <div className={ style.messageDiv }>
      {
        sender === "vendor" ?
          <div className={ `${style.messageSenderInfo} ` }>
            <div className={ style.messageSenderAvatar }></div>
            <span>{ messageData.sender }</span>
          </div>
          : null
      }
      <div className={ `${style.messageContent} ${customMessageStyle.positionCSS}` }>
        { messageData.content }
      </div>
    </div>
  );
};

export default Message;