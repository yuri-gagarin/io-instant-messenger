import React from "react";
// additional components //
import MessagesContainer from "../messages/MessagesContainer";
import ToggleConversation from "../buttons/ToggleConversations";
import CloseFooterBtn from "../buttons/CloseFooterButton";
import UIComponents from "../ui_components/UIComponents";
// styles and css //
import styles from "./css/footerStyles.module.css";

interface ClientFooterProps {
  closeClientMessengerFooter(): void;
}

type ClientFooterState = {
  conversationOpen: boolean;
  customCss: {
    hideFooterAnimation: string;
    hideMessagesContainerAnimation: string;
  }
}

class ClientFooterContainer extends React.Component<ClientFooterProps, ClientFooterState> {
  constructor(props: ClientFooterProps) {
    super(props);
    this.state = { 
      conversationOpen: false, 
      customCss: { hideFooterAnimation: "", hideMessagesContainerAnimation: "" } 
    };
  }
  // lifecycle methods //
  componentDidMount() {
    setTimeout(() => {
      this.setState({ conversationOpen: true });
    }, 200);
  }
  // mounts <MessagesContainer> component and toggles animation //
  toggleConversationComponent = () => {
    if (this.state.conversationOpen) {
      this.setState({
        customCss: { ...this.state.customCss, hideMessagesContainerAnimation: styles.moveMessengerWindowOutOfView }
      });
      setTimeout(() => {
        this.setState({ 
          conversationOpen: false ,
          customCss: { ...this.state.customCss, hideMessagesContainerAnimation: "" }
        });
      }, 500);
    } else {
      this.setState({ conversationOpen: true });
    }
  }

  // Should first animate down and then fire off event to unmount component //
  closeFooter = () => {
    this.setState({ 
      customCss: { ...this.state.customCss, hideFooterAnimation: styles.moveOutOfView } 
    });
    setTimeout(() => {
      this.props.closeClientMessengerFooter();
    }, 300);
  }

  render() {
    const { conversationOpen } = this.state;
    const { hideFooterAnimation, hideMessagesContainerAnimation } = this.state.customCss;

    return (
      <div className={ `${styles.clientFooterContainer} ${styles.moveIntoView} ${hideFooterAnimation}` }>
        <CloseFooterBtn 
          closeFooter={ this.closeFooter }
        />
        <div className={ styles.pushRight }>
          <UIComponents />
          <ToggleConversation 
            conversationOpen={ conversationOpen } 
            buttonText={ conversationOpen ? 'Close' : 'Open' }
            toggleConversation={ this.toggleConversationComponent }
          />
        </div>
        {
          conversationOpen ? <MessagesContainer messages={[]} hideMessagesContainerAnimation={hideMessagesContainerAnimation} /> : null
        }
      </div>
    );
  }
}

export default ClientFooterContainer;