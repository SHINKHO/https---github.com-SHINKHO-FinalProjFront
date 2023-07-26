import React, { useState } from "react";
import styles from "./ChatUIContainer.module.css";
import ChatUIOpen from "./ChatUI/ChatUIOpen/ChatUIOpen";
import ChatUIClose from "./ChatUI/ChatUIClose/ChatUIClose";
import ChatOpenCloseButton from "./ChatUI/ChatOpenCloseButton";

const ChatUIContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [curRoom, setCurRoom] = useState(0);

  const chatRoomToggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  const enterHandler = (room_idx) => {
    setIsEntered(true);
    setCurRoom(room_idx);
  };
  const exitHandler = () => {
    setIsEntered(false);
    setCurRoom(0);
  };

  return (
    <div className={styles.mainframe}>
      {isOpen ? (
        <ChatUIOpen
          userInfo={props.userInfo}
          chatRooms={props.chatRooms}
          addRoom={props.addRoom}
          removeRoom={props.removeRoom}
          isEntered={isEntered}
          enterHandler={enterHandler}
          exitRoom={exitHandler}
          currentRoom={curRoom}
          chats={props.chats}
          addChat={props.addChat}
        />
      ) : (
        <ChatUIClose notices={props.chatRooms[0]} addRoom={props.addRoom} />
      )}
      <ChatOpenCloseButton chatroomtoggler={chatRoomToggleHandler} />
    </div>
  );
};

export default ChatUIContainer;
