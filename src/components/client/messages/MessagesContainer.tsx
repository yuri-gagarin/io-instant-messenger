import React from "react";
// additonal components //
import MessagesWindow from "./MessagesWindow";
import MessagesInput from "../inputs/MessagesInput";
// css imports //
import styles from "./css/messagesContainer.module.css";

type Props = {
  messages: string[];
  hideMessagesContainerAnimation: string;
}
type State = {
  messages: string[];
  styles: {
    opened: string;
    closed: string;
  }
}

class MessagesContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { messages: [], styles: { opened: "", closed: styles.closed } }
  }

  componentDidMount() {
    this.setState({
      messages: [ "one", "two", "three" ],
      styles: {
        ...this.state.styles
      }
    });
  }

  componentWillUnmount() {

  }

  render() {
    const { hideMessagesContainerAnimation } = this.props;
    return (
      <div className={ `${styles.messagesContainer} ${styles.slideIntoView} ${hideMessagesContainerAnimation}` }>
        <MessagesWindow messages={ this.state.messages } />
        <MessagesInput />
      </div>
    )
  }
}

export default MessagesContainer;