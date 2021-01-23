import React from "react";
//
import ClientFooter from "./footer/ClientFooterContainer";
import MessagesContainer from "./messages/MessagesContainer";
import ClosedMessengerUI from "./ui_components/ClosedMessengerUI";

type ClientMessengerProps = {
  adminOnline: boolean;
}

type ClientMessengerState = {
  clientMessengerOpen: boolean;
  conversationOpen: boolean;
  clientMessengerClosing: boolean;
  clientMessennerOpening: boolean;
}

class ClientMessenger extends React.Component<ClientMessengerProps, ClientMessengerState> {
  constructor(props: ClientMessengerProps) {
    super(props);
    this.state = {
      conversationOpen: false,
      clientMessengerOpen: true,
      clientMessengerClosing: false,
      clientMessennerOpening: false
    }
  }
  
  componentDidMount() {
    this.props.adminOnline ? this.setState({ clientMessengerOpen: true }) : this.setState({ clientMessengerOpen: true })
  }

  toggleConversation = () => {
    this.setState({
      conversationOpen: !this.state.conversationOpen
    });
  }

  toggleClientMessenger = () => {
    this.setState({
      clientMessengerClosing: true
    });
    setTimeout(() => {
      this.setState({ clientMessengerOpen: false })
    });
  }

  closeFooter = () => {
    
  }

  handleOpenClientMessenger = () => {
    this.setState({
      clientMessengerOpen: true,
      clientMessennerOpening: true,
      clientMessengerClosing: false
    });
  };

  render() {
    const { clientMessengerOpen } = this.state;
    const { adminOnline } = this.props;
    console.log(clientMessengerOpen)
    return (
      clientMessengerOpen ?
        <div>
          <ClientFooter 
            toggleConversation={ this.toggleConversation } 
            toggleClientMessenger={ this.toggleClientMessenger }
            conversationOpen={ this.state.conversationOpen }
            clientMessengerOpen={ this.state.clientMessengerOpen }
            footerClosing={ this.state.clientMessengerClosing }
          />
          {
            this.state.conversationOpen ? <MessagesContainer open={this.state.conversationOpen} messages={[]} /> : null
          }
        </div>
      : 
        <ClosedMessengerUI 
          adminOnline={ adminOnline }
          handleOpenClientMessenger={ this.handleOpenClientMessenger }
        />
    );
  }
}

export default ClientMessenger;