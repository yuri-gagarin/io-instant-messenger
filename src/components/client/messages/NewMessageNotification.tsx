import React from "react";
// styles and css //
import styles from "./css/newMessageNotification.module.css";

interface Props {
  numberOfNewMessages: number;
}
const NewMessageNotification: React.FC<Props> = ({ numberOfNewMessages }): JSX.Element => {

  return (
    <div className={ styles.newMessageNotificationContainer }>
      <div className={ styles.newMessageNotificationText }>{ numberOfNewMessages }</div>
    </div>
  );
};

export default NewMessageNotification;