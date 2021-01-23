import React from "react";
// additional components //
import ToggleConversation from "../buttons/ToggleConversations";
import CloseFooterBtn from "../buttons/CloseFooterButton";
import UIComponents from "../ui_components/UIComponents";
// styles and css //
import styles from "./css/footerStyles.module.css";


interface ClientFooterProps {
  toggleConversation(): void;
  toggleClientMessenger(): void;
  conversationOpen: boolean;
  clientMessengerOpen: boolean;
  footerClosing?: boolean;
  footerOpening?: boolean;
}

type ClientFooterState = {
  footerClosing: boolean;
  footerOpening: boolean;
}

class ClientFooterContainer extends React.Component<ClientFooterProps, ClientFooterState> {
  constructor(props: ClientFooterProps) {
    super(props);
    this.state = { footerClosing: false , footerOpening: false };
  }
  componentDidMount() {
    this.setState({ footerOpening: true })
  }
  closeFooter = () => {

  }

  render() {
    const { toggleConversation, toggleClientMessenger, conversationOpen, footerClosing } = this.props;
    return (
      <div id={ styles.clientFooterContainer } className={`${footerClosing ? styles.footerClosing : ""} ${styles.moveIntoView}`}>
        <CloseFooterBtn 
          closeFooter={ toggleClientMessenger }
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