import React from "react";
import styles from "./ChatUIRoomItem.module.css";
import ChatUIRoomController from "./ChatUIRoomController";

const ChatUIRoomItem = (props) => {
  const { participants, roomname, removeRoom, enterRoomHandler } = props;
  return (
    <li className={styles.roomItem}>
      <div>Room Name: {roomname}</div>
      <div>
        Participants:
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participants[index].user.name}
            </li>
          ))}
        </ul>
      </div>
      <ChatUIRoomController enterRoomHandler={enterRoomHandler} removeRoom={removeRoom}/>
    </li>
  );
};

export default ChatUIRoomItem;
