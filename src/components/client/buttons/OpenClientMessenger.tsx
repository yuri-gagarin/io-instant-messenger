import React from "react";
// style and css imports //
import styles from "./css/openClientMessenger.module.css";

interface Props extends React.PropsWithChildren<{}> {
  handleOpenClientMessenger(e: any): void;
  onMouseEnter?(e: any): any;
  onMouseLeave?(e: any): any;
  
}

const OpenClientMessenger: React.FC<Props> = (props): JSX.Element => {
  
  return (
    <div className={ styles.openClientMessengerContainer }>
      <i 
        className={`fas fa-comments ${''}`} 
        onMouseEnter={props.onMouseEnter} 
        onMouseLeave={props.onMouseLeave}
        onClick={props.handleOpenClientMessenger}
      >
      </i>
    </div>
  );
};

export default OpenClientMessenger;
