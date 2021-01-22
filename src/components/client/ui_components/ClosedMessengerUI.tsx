import React from "react";
// additional components //
import VendorOnlineBlinker from "./VendorOnlineBlinker";
import OpenClientMessenger from "../buttons/OpenClientMessenger";
// styles and css imports //
import styles from "./css/closedMessengerUI.module.css";

interface Props {
  handleOpenClientMessenger(e: any):void;
  adminOnline: boolean;
}
interface State {
  showDescriptionCSS: string;
  hideDescriptionCSS: string;
}

class ClosedMessengerUI extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showDescriptionCSS: "", hideDescriptionCSS: "" };
  }

  listenForMouseEvent = (e: React.MouseEvent) => {
    if (e.type === "mouseenter") {
      this.setState({ showDescriptionCSS: styles.chatDirectionsVisible, hideDescriptionCSS: "" })
    }
    if (e.type === "mouseleave") {
      this.setState({ hideDescriptionCSS: styles.chatDirectionsNotVisible, showDescriptionCSS: "" })
    }
  }

  render() {
    const { showDescriptionCSS, hideDescriptionCSS } = this.state;
    const { adminOnline } = this.props;
    console.log(36);
    console.log(this.props.adminOnline)
    return (
      <div className={ styles.closedMessengerUIContainer }>
        <div className={ styles.blinkerHolder }>
          <div className={ styles.blinkerDescription}>
            { adminOnline ? "Online" : "Offline" }
          </div>
          <div>         
             <VendorOnlineBlinker vendorOnline={ this.props.adminOnline } />
          </div>
        </div>
        <OpenClientMessenger 
          handleOpenClientMessenger={ this.props.handleOpenClientMessenger }
          onMouseEnter={ this.listenForMouseEvent } 
          onMouseLeave={ this.listenForMouseEvent }
          { ...this.props.children }
        />
        <div className={`${styles.closedMessengerUIChatDirections} ${showDescriptionCSS} ${hideDescriptionCSS}` 
        }>
          { adminOnline ? "Chat With Us" : "Live chat offline" }
        </div>
      </div>
    )
  }
};

export default ClosedMessengerUI;
