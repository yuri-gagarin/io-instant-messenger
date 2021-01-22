import React from "react";
// styles and css imports //
import styles from "./css/vendorInformation.module.css";

interface Props {
  vendorOnline?: boolean;
  vendorInformation?: string;
}

const VendorInformation: React.FC<Props> = ({ vendorOnline, vendorInformation }): JSX.Element => {

  return (
    <div className={ styles.vendorInformationContainer }>
      {
        vendorOnline 
          ? <span><i className={ `${"far fa-user"} ${styles.onlineIcon}` }></i></span>
          : <span><i className={ `${"fas fa-user-slash"} ${styles.offlineIcon}` }></i></span>
      }
      <span className={ styles.vendorInformationText}>{ vendorInformation }</span>
    </div>
  );
};

export default VendorInformation;