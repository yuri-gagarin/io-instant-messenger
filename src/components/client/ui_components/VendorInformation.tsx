import React from "react";
// additional types and interfaces //
import { VendorInformation } from "../_type_declarations/clientMessengerTypes";
// styles and css imports //
import styles from "./css/vendorInformation.module.css";

interface Props {
  vendorOnline?: boolean;
  vendorInformation?: VendorInformation;
}

const VendorInformationComponent: React.FC<Props> = ({ vendorOnline, vendorInformation, children }): JSX.Element => {

  return (
    <div className={ styles.vendorInformationContainer }>
      {
        vendorOnline 
          ? <span><i className={ `${"far fa-user"} ${styles.onlineIcon}` }></i></span>
          : <span><i className={ `${"fas fa-user-slash"} ${styles.offlineIcon}` }></i></span>
      }
      <span className={ styles.vendorInformationText}>{ vendorInformation?.firstName ? vendorInformation.firstName : "Offline" }</span>
      { children }
    </div>
  );
};

export default VendorInformationComponent;