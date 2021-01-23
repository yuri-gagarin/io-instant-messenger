import React from "react";
// styles and css //
import styles from "./css/sendMessageButton.module.css";

type Props = {
  text: string;
  onClick?(e: any): void;
}
const SendMessageBtn: React.FC<Props> = ({ text, onClick }): JSX.Element => {
  const keyDown = (e: React.KeyboardEvent) => {
    console.log(e.key)
  }
  return (
    <div className={ styles.sendMessageButton } onKeyPress={ keyDown } onClick={onClick}>
      { text }
    </div>
  );
};

export default SendMessageBtn;