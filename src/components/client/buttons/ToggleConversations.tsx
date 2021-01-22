import React, { useState } from "react";
// styles and css //
import styles from "./css/toggleConversationBtn.module.css";

type Props = {
  conversationOpen: boolean;
  buttonText: string;
  toggleConversation(): void;
}
type LocalState = {
  mouseEntered: boolean;
  animateClass: string | "";
}

const  ClientToggleConversationBtn: React.FC<Props> = ({ conversationOpen, buttonText, toggleConversation }): JSX.Element => {
  const [ localState, setLocalState ] = useState<LocalState>({ mouseEntered: false, animateClass: "" });

  const listenForMouseEnter = () => {
    setLocalState({ mouseEntered: true, animateClass: styles.animateIcon });
  };
  const listenForMouseLeave = () => {
    setLocalState({ mouseEntered: false, animateClass: "" });
  };
  
  return (
    <div 
      id={styles.clientToggleConversationBtn}
      onClick={ toggleConversation }
      onMouseEnter={ listenForMouseEnter }
      onMouseLeave={ listenForMouseLeave }
    >
      <span>{ buttonText }</span>
      {
        conversationOpen ? 
          <i className={ `${styles.messageIcon} ${localState.animateClass} fas fa-times` }></i> 
          : 
          <i className={ `${styles.messageIcon} ${localState.animateClass} far fa-comment-dots` }></i>
        
      }
    </div>
  );
  
};

export default ClientToggleConversationBtn;