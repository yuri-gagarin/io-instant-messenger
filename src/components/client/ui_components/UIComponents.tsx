import React from "react";
// additional components //
import AdminOnlineBlinker from "./VendorOnlineBlinker";
import VendorInformationComp from "./VendorInformation";
import NewMessageNotification from "../messages/NewMessageNotification";
// custom types and interfaces //
import { VendorInformation } from "../_type_declarations/clientMessengerTypes";
// css and style imports //
import styles from "./css/UIComponentsStyles.module.css";

interface Props {
  vendorOnline: boolean;
  vendorInformation?: VendorInformation;
}

const UIComponents: React.FC<Props> = ({ vendorOnline, vendorInformation, children }): JSX.Element => {

  return (
    <div className={styles.uiComponentsContainer}>
      <VendorInformationComp vendorOnline={ vendorOnline } vendorInformation={ vendorInformation } >
        <NewMessageNotification numberOfNewMessages={0} />
      </VendorInformationComp>
      <AdminOnlineBlinker vendorOnline={ vendorOnline } />
      { children }
    </div>
  );
};

export default UIComponents;