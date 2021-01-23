import React from "react";
//
import ClientMessengerFooter from "./footer/ClientFooterContainer";
import ClosedMessengerUI from "./ui_components/ClosedMessengerUI";

type ClientMessengerProps = {
  vendorOnline: boolean;
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
    const { vendorOnline } = this.props;

    return (
      clientMessengerFooterOpen 
      ?
        <ClientMessengerFooter 
          vendorOnline={ this.props.vendorOnline }
          closeClientMessengerFooter={ this.closeClientMessengerFooter }
        />
      : 
        <ClosedMessengerUI 
          vendorOnline={ vendorOnline }
          handleOpenClientMessenger={ this.handleOpenClientMessenger }
        />
    );
  }
};

export default ClientMessenger;