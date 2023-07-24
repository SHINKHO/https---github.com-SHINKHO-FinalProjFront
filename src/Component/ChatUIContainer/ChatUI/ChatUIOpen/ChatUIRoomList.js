import React from "react";
import styles from "./ChatUIRoomList.module.css";
import ChatUIRoomItem from "./ChatUIRoomItem";

const ChatUIRoomList = (props) => {
  const rooms = props.chatRooms.map((elem, idx) => {
    return (
      <ChatUIRoomItem
        key={idx}
        participants={elem.participants}
        roomname={elem.roomname}
      />
    );
  });
  return <ul>{rooms}</ul>;
};

export default ChatUIRoomList;
