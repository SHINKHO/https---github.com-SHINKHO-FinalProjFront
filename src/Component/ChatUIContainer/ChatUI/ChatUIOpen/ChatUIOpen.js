import React, { useState } from "react";
import styles from "./ChatUIOpen.module.css";
import ChatUIRoomList from "./ChatUIRoomList";
import ChatUIOpenController from "./ChatUIOpenController";
import ChatRoomController from "./ChatRoom/ChatRoomController";
import ChatRoom from "./ChatRoom/ChatRoom";
import ChatUIRoomForm from "./ChatUIRoomForm";

const ChatUIOpen = (props) => {
  const [keyWord, setKeyWord] = useState("");
  const [isMakingRoom, setIsMakingRoom] = useState(false);

  const chatRoomSearched = Array.isArray(props.chatRooms)
    ? props.chatRooms.filter((item, _) => item.roomname?.includes(keyWord)).map((room, _) => ({
      ...room,
      index_in_origin: props.chatRooms.indexOf(room),
    }))
    : [];
  const sendMessage=()=>{
    
  }
  // const chatRoomSearched = props.chatRooms
  //   .filter((item, _) => item.roomname.includes(keyWord))
  //   .map((room, _) => ({
  //     ...room,
  //     index_in_origin: props.chatRooms.indexOf(room),
  //   }));
  // 

  return (
    <div className={styles.container}>
      {props.isEntered ? (
        <ChatRoom userInfo={props.userInfo} chats={props.chats} addChat={props.addChat} exitRoom={props.exitRoom} chatRooms={props.chatRooms} currentRoom={props.currentRoom} />
      ) : (
          <ChatUIRoomList
            enterRoomHandler={props.enterHandler}
            chatRooms={chatRoomSearched}
            removeRoom={props.removeRoom}
            addRoom={props.addRoom}
            openModalHandler={setIsMakingRoom}
            isMakingRoom={isMakingRoom}
            userInfo={props.userInfo}
          />
      )}<hr/>
      {(isMakingRoom&&!props.isEntered) && <ChatUIRoomForm userInfo={props.userInfo} cancelButtonHandler={()=>setIsMakingRoom(!isMakingRoom)} addRoom={props.addRoom}/>}
      {props.isEntered ? (
        <ChatRoomController currentRoom={props.currentRoom} addChat={props.addChat} userInfo={props.userInfo}  exitRoom={props.exitHandler} />
      ) : (
        <ChatUIOpenController keyWordHandler={setKeyWord} keyWord={keyWord} />
      )}
    </div>
  );
};

export default ChatUIOpen;
