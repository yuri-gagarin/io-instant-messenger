import React from "react";
// styles and css //
import styles from "./css/toggleConversationBtn.css";

type ButtonState = {
  backgroundColor: string;
}
type ButtonProps = {
  conversationOpen: boolean;
  buttonText: string;
  toggleConversation(): void;
}

class ClientToggleConversationBtn extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
  }
  state = {
    backgroundColor: "white"
  }

  render() {
    return (
      <div 
        id={styles.clientToggleConversationBtn}
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={ this.props.toggleConversation }
      >
        <div>{ this.props.buttonText }</div>
      </div>
    )
  }
};

export default ClientToggleConversationBtn;