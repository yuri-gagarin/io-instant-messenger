import React from "react";
//
import ClientMessengerFooter from "./footer/ClientFooterContainer";
import ClosedMessengerUI from "./ui_components/ClosedMessengerUI";

type ClientMessengerProps = {
  adminOnline: boolean;
}

type ClientMessengerState = {
  clientMessengerFooterOpen: boolean;
}

class ClientMessenger extends React.Component<ClientMessengerProps, ClientMessengerState> {
  constructor(props: ClientMessengerProps) {
    super(props);
    this.state = {
      clientMessengerFooterOpen: true,
    }
  }
  
  closeClientMessengerFooter = () => {
    this.setState({ clientMessengerFooterOpen: false });
  }

  handleOpenClientMessenger = () => {
    this.setState({
      clientMessengerFooterOpen: true
    });
  };

  render() {
    const { clientMessengerFooterOpen } = this.state;
    const { adminOnline } = this.props;

    return (
      clientMessengerFooterOpen 
      ?
        <ClientMessengerFooter 
          closeClientMessengerFooter={this.closeClientMessengerFooter}
        />
      : 
        <ClosedMessengerUI 
          adminOnline={ adminOnline }
          handleOpenClientMessenger={ this.handleOpenClientMessenger }
        />
    );
  }
};

export default ClientMessenger;