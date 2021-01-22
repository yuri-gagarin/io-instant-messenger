import React from "react";
// style imports //
import styles from "./css/closeFooterBtn.css";

type Props = {
  closeFooter(): void;
}

const ClientCloseFooterBtn: React.FC<Props> = ({ closeFooter }) => {
  return (
    <div id={ styles.closeFooterBtnContainer } onClick={ closeFooter }>
      <span>X</span>
    </div>
  )
};

export default ClientCloseFooterBtn;