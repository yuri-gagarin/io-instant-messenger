import * as React from 'react'
import MessageContainerComponent from './components/containers/MessageContainerComponent'
import MessagesFooter from "./components/containers/MessagesFooter";
import styles from './styles.module.css'

interface Props {
  text: string
}

const InstantMessenger = ({ text }: Props) => {
  return (
    <div className={styles.test}>Whatever Component: {text}
      <MessageContainerComponent title={"My messages"} />
      <MessagesFooter title={"footer"} />
    </div>
  );
}

export default InstantMessenger;
