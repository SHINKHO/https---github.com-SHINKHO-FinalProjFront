import React, { useState } from "react";
import styles from "./ChatUIOpen.module.css";
import ChatUIRoomList from "./ChatUIRoomList";
import ChatUIOpenController from "./ChatUIOpenController";
import ChatRoomController from "./ChatRoom/ChatRoomController"
import ChatRoom from "./ChatRoom/ChatRoom";

const ChatUIOpen = (props) => {
  const [isEntered,setIsEntered] = useState(false);
  
  return (
    <div>
      {isEntered? <ChatRoom chatRooms={props.chatRooms}/>:<ChatUIRoomList chatRooms={props.chatRooms} />}
      {isEntered? <ChatRoomController exitRoom={setIsEntered}/>:<ChatUIOpenController enterRoom={setIsEntered}/>}
    </div>
  );
};

export default ChatUIOpen;
