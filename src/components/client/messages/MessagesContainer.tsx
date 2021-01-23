import React from "react";
// additonal components //
import MessagesWindow from "./MessagesWindow";
import MessagesInput from "../inputs/MessagesInput";
// css imports //
import styles from "./css/messagesContainer.module.css";

// data generation remove before prod build //
import { generateMockMessages } from "../../../mock_data/messageGenerator";
import { MessageData } from "./custom_types/typeDeclratations";

const messages = generateMockMessages(15);
//

type Props = {
  messages: string[];
  hideMessagesContainerAnimation: string;
}
type State = {
  messages: MessageData[];
}

class MessagesContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { messages: [] }
  }

  componentDidMount() {
    this.setState({
      messages: [ ...messages ]
    });
  }

  componentWillUnmount() {

  }
  sendMessage = (messageData: string) => {
    const message: MessageData = { 
      sender: "user", content: 
      messageData, 
      sentAt: new Date(Date.now()).toString() 
    };

    this.setState({ messages: [ ...this.state.messages, message ] });
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