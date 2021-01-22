import React from "react";
// additonal components //
import MessagesWindow from "./MessagesWindow";
// css imports //
import styles from "./css/messagesContainer.css";

type Props = {
  messages: string[];
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
      messages: [ "one", "two", "three" ]
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={ styles.messagesContainer }>
        <MessagesWindow messages={ this.state.messages } />
      </div>
    )
  }
}

export default MessagesContainer;