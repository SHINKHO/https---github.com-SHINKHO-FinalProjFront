import React, { useState } from "react";
import styles from "./ChatUIContainer.module.css";
import ChatUIOpen from "./ChatUI/ChatUIOpen/ChatUIOpen";
import ChatUIClose from "./ChatUI/ChatUIClose/ChatUIClose";
import ChatOpenCloseButton from "./ChatUI/ChatOpenCloseButton";

const ChatUIContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const chatRoomToggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.mainframe}>
      {isOpen ? (
        <ChatUIOpen
          chatRooms={props.chatRooms}
          addRoom={props.addRoom}
          removeRoom={props.removeRoom}
        />
      ) : (
        <ChatUIClose notices={props.chatRooms[0]} addRoom={props.addRoom} />
      )}
      <ChatOpenCloseButton chatroomtoggler={chatRoomToggleHandler} />
    </div>
  );
};

export default ChatUIContainer;
