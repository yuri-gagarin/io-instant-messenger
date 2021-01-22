import React from "react";
//
import ClientFooter from "./footer/ClientFooterContainer";
import MessagesContainer from "./messages/MessagesContainer";

type ClientMessengerProps = {

}

type ClientMessengerState = {
  messagesContainerVisible: boolean;
}
class ClientMessenger extends React.Component<ClientMessengerProps, ClientMessengerState> {
  constructor(props: ClientMessengerProps) {
    super(props);
    this.state = {
      messagesContainerVisible: true
    }
  }
  
  toggleConversation = () => {
    this.setState({
      messagesContainerVisible: !this.state.messagesContainerVisible
    });
  }
  

  render() {
    console.log(this.state)
    return (
      <div>
        <ClientFooter toggleConversation={ this.toggleConversation } />
        {
          this.state.messagesContainerVisible ? <MessagesContainer messages={[]} /> : null
        }
      </div>
    );
  }
}

export default ClientMessenger;