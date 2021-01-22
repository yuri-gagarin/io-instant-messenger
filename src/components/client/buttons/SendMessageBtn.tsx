import React from "react";
// styles and css //
import styles from "./css/sendMessageButton.module.css";

type Props = {
  text: string;
}
const SendMessageBtn: React.FC<Props> = ({ text }): JSX.Element => {
  const keyDown = (e: React.KeyboardEvent) => {
    console.log(e.key)
  }
  return (
    <div className={ styles.sendMessageButton } onKeyPress={ keyDown }>
      { text }
    </div>
  );
};

export default SendMessageBtn;