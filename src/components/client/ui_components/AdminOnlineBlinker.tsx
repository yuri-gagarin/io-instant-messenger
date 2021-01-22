import React from "react";
// css and styles //
import styles from "./css/adminOnlineBlinker.module.css";

interface Props {
  vendorOnline: boolean;
  venorName?: string;
}
const AdminOnlineBlinker: React.FC<Props> = ({ vendorOnline }): JSX.Element => {
  //const [ blinkerState, setBlinkerState ] = useState({ online: adminOnline });

  return (
    <div className={ styles.adminOnlineBlinkerContainer }>
      <div className={ `${ styles.onlineStatusBlinker } ${ vendorOnline ? styles.online : styles.offline } `}></div>
    </div>
  );
};

export default AdminOnlineBlinker;