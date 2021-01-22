import React from "react";
// additional components //
import ToggleConversation from "../buttons/ToggleConversations";
import CloseFooterBtn from "../buttons/CloseFooterButton";
import UIComponents from "../ui_components/UIComponents";
// styles and css //
import styles from "./css/footerStyles.module.css";


type ClientFooterProps = {
  toggleConversation(): void;
  conversationOpen: boolean;
}

class ClientFooterContainer extends React.Component<ClientFooterProps> {
  constructor(props: ClientFooterProps) {
    super(props);
  }

  closeFooter = () => {

  }

  render() {
    const { toggleConversation, conversationOpen } = this.props;
    return (
      <div id={ styles.clientFooterContainer }>
        <CloseFooterBtn 
          closeFooter={ this.closeFooter }
        />
        <div className={ styles.pushRight }>
          <UIComponents />
          <ToggleConversation 
            conversationOpen={ conversationOpen } 
            buttonText={ conversationOpen ? 'Close' : 'Open' }
            toggleConversation={ toggleConversation }
          />
        </div>
        
      </div>
    );
  }
}

export default ClientFooterContainer;