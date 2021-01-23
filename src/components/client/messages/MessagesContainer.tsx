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
}

class MessagesContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { messages: [] }
  }

  componentDidMount() {
    this.setState({
      messages: [ 
        "one", "two", "threefaefefef efefefefegegeg feffefefeffeffefefefefefefefe", "faefe", "feafef", "faefefefea", "fafeafe", "faefefae", "feafe"
      ],
    });
  }

  componentWillUnmount() {

  }
  sendMessage = (messageData: string) => {
    this.setState({ messages: [ ...this.state.messages, messageData ] });
  }

  render() {
    const { hideMessagesContainerAnimation } = this.props;
    return (
      <div className={ `${styles.messagesContainer} ${styles.slideIntoView} ${hideMessagesContainerAnimation}` }>
        <MessagesWindow messages={ this.state.messages } />
        <MessagesInput sendMessage={ this.sendMessage }/>
      </div>
    )
  }
}

export default MessagesContainer;