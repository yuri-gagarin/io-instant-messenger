import React from "react";
// additional components //
import AdminOnlineBlinker from "./VendorOnlineBlinker";
import VendorInformation from "./VendorInformation";
// css and style imports //
import styles from "./css/UIComponentsStyles.module.css";

class UIComponents extends React.Component {

  render() {
    return (
      <div className={styles.uiComponentsContainer}>
        <VendorInformation vendorOnline={ true } vendorInformation={ "Vendor offline" } />
        <AdminOnlineBlinker vendorOnline={ true } />
      </div>
    )
  }
};

export default UIComponents;