import * as React from 'react'
import MessageContainerComponent from './components/containers/MessageContainerComponent'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.test}>Whatever Component: {text}
      <MessageContainerComponent title={"My messages"} />
    </div>
  );
}
