import React from "react";
// additonal components //
import MessagesWindow from "./MessagesWindow";
import MessagesInput from "../inputs/MessagesInput";
// css imports //
import styles from "./css/messagesContainer.module.css";

type Props = {
  open: boolean;
  messages: string[];
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
        ...this.state.styles,
        opened: (this.props.open ? styles.opened : "")
      }
    });
  }

  componentWillUnmount() {

  }

  render() {
    const { opened } = this.state.styles;
    return (
      <div className={ `${styles.messagesContainer} ${opened}` }>
        <MessagesWindow messages={ this.state.messages } />
        <MessagesInput />
      </div>
    )
  }
}

export default MessagesContainer;