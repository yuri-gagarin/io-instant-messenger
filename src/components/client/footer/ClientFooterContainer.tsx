import React from "react";
import styles from "./css/footerStyles.css";
// additional components //
import ToggleConversation from "../buttons/ToggleConversations";
import CloseFooterBtn from "../buttons/CloseFooterButton";

type ClientFooterProps = {
  toggleConversation(): void;
}

class ClientFooterContainer extends React.Component<ClientFooterProps> {
  constructor(props: ClientFooterProps) {
    super(props);
  }

  closeFooter = () => {

  }

  render() {
    const { toggleConversation } = this.props;
    return (
      <div id={styles.clientFooterContainer}>
        <CloseFooterBtn 
          closeFooter={ this.closeFooter }
        />
        <ToggleConversation 
          conversationOpen={ false } 
          buttonText={ "Toggle Conversation" }
          toggleConversation={ toggleConversation }
        />
      </div>
    );
  }
}

export default ClientFooterContainer;