import React from "react";
import styles from "./ChatOpenCloseButton.module.css";

const ChatOpenCloseButton = (props)=>{
    const togglerHandler=()=>{
        console.log("toggled!");
        props.chatroomtoggler();
    }

    return <button className={styles.button} onClick={togglerHandler}>toggler!</button>;
}

export default ChatOpenCloseButton;