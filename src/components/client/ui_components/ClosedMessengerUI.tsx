import React from "react";
// additional components //
import VendorOnlineBlinker from "./VendorOnlineBlinker";
import OpenClientMessenger from "../buttons/OpenClientMessenger";
// styles and css imports //
import styles from "./css/closedMessengerUI.module.css";

interface Props {
  handleOpenClientMessenger(e: any):void;
  vendorOnline: boolean;
}
interface State {
  showDescriptionCSS: string;
  hideDescriptionCSS: string;
  componentClosingCSS: string;
}

class ClosedMessengerUI extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showDescriptionCSS: "", hideDescriptionCSS: "", componentClosingCSS: "" };
  }

  listenForMouseEvent = (e: React.MouseEvent) => {
    if (e.type === "mouseenter") {
      this.setState({ showDescriptionCSS: styles.chatDirectionsVisible, hideDescriptionCSS: "" })
    }
    if (e.type === "mouseleave") {
      this.setState({ hideDescriptionCSS: styles.chatDirectionsNotVisible, showDescriptionCSS: "" })
    }
  }
  listenForComponentClose = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ componentClosingCSS: styles.slideOutOfView });
    
    setTimeout(() => {
      this.props.handleOpenClientMessenger(e);
    }, 100);
    
  }

  render() {
    const { showDescriptionCSS, hideDescriptionCSS, componentClosingCSS } = this.state;
    const { vendorOnline } = this.props;

    return (
      <div className={ `${styles.closedMessengerUIContainer} ${styles.slideIntoView} ${componentClosingCSS}` }>
        <div className={ styles.blinkerHolder }>
          <VendorOnlineBlinker vendorOnline={ this.props.vendorOnline } />
        </div>
        <OpenClientMessenger 
          handleOpenClientMessenger={ this.listenForComponentClose }
          onMouseEnter={ this.listenForMouseEvent } 
          onMouseLeave={ this.listenForMouseEvent }
          { ...this.props.children }
        />
        <div className={`${styles.closedMessengerUIChatDirections} ${showDescriptionCSS} ${hideDescriptionCSS}` 
        }>
          { vendorOnline ? "Chat With Us" : "Live chat offline" }
        </div>
      </div>
    )
  }
};

export default ClosedMessengerUI;
