import React from "react";
//
import ClientFooter from "./footer/ClientFooterContainer";
import MessagesContainer from "./messages/MessagesContainer";

type ClientMessengerProps = {

}

type ClientMessengerState = {
  conversationOpen: boolean;
}
class ClientMessenger extends React.Component<ClientMessengerProps, ClientMessengerState> {
  constructor(props: ClientMessengerProps) {
    super(props);
    this.state = {
      conversationOpen: true
    }
  }
  
  toggleConversation = () => {
    this.setState({
      conversationOpen: !this.state.conversationOpen
    });
  }
  

  render() {
    return (
      <div>
        <ClientFooter 
          toggleConversation={ this.toggleConversation } 
          conversationOpen={ this.state.conversationOpen }
        />
        {
          this.state.conversationOpen ? <MessagesContainer open={this.state.conversationOpen} messages={[]} /> : null
        }
      </div>
    );
  }
}

export default ClientMessenger;