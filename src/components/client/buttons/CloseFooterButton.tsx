import React from "react";
// style imports //
import styles from "./css/closeFooterBtn.module.css";

type Props = {
  closeFooter(): void;
}

const ClientCloseFooterBtn: React.FC<Props> = ({ closeFooter }) => {
  return (
    <div id={ styles.closeFooterBtnContainer } onClick={ closeFooter }>
      <i className="far fa-times-circle"></i>
    </div>
  )
};

export default ClientCloseFooterBtn;