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
}
class ClientMessenger extends React.Component<ClientMessengerProps, ClientMessengerState> {
  constructor(props: ClientMessengerProps) {
    super(props);
    this.state = {
      conversationOpen: false,
      clientMessengerOpen: true
    }
  }
  
  componentDidMount() {
    this.props.adminOnline ? this.setState({ clientMessengerOpen: true }) : this.setState({ clientMessengerOpen: false })
  }

  toggleConversation = () => {
    this.setState({
      conversationOpen: !this.state.conversationOpen
    });
  }

  toggleClientMessenger = () => {
    this.setState({
      clientMessengerOpen: false
    })
  }

  handleOpenClientMessenger = () => {
    this.setState({
      clientMessengerOpen: true
    });
  };

  render() {
    console.log(47);
    console.log(this.props.adminOnline)
    const { clientMessengerOpen } = this.state;
    const { adminOnline } = this.props;
    return (
      clientMessengerOpen ?
        <div>
          <ClientFooter 
            toggleConversation={ this.toggleConversation } 
            toggleClientMessenger={ this.toggleClientMessenger }
            conversationOpen={ this.state.conversationOpen }
            clientMessengerOpen={ this.state.clientMessengerOpen }
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