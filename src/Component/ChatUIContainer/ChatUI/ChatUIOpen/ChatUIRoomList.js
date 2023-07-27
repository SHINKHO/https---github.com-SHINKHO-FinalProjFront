import React from "react";
import styles from "./ChatUIRoomList.module.css";
import ChatUIRoomItem from "./ChatUIRoomItem";
import ChatUIRoomForm from "./ChatUIRoomForm";

const ChatUIRoomList = (props) => {
  
  const openModalHandler = ()=>{
    props.openModalHandler('true');
  }
  
  const rooms = props.chatRooms.map((elem) => {
    return (
      <ChatUIRoomItem
        key={elem.index_in_origin}
        isOwner={elem.participants[0].user.uid === props.userInfo.curUserId}
        participants={elem.participants}
        roomname={elem.roomname}
        removeRoom={() => props.removeRoom(elem.index_in_origin)}
        enterRoomHandler={() => props.enterRoomHandler(elem.index_in_origin)}
      />
    );
  });

  const openNewRoomModal = ()=>{

  }

  return (
    <ul>
      {rooms}
      <li>
      {!props.isMakingRoom && <button onClick={openModalHandler}>newRoom</button>}
      </li>
    </ul>
  );
};

export default ChatUIRoomList;
