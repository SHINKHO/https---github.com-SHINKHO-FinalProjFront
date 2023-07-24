import React from "react";
import styles from "./ChatUIRoomItem.module.css";
import ChatUIRoomController from "./ChatUIRoomController";

const ChatUIRoomItem = (props) => {
  const { participants, roomname } = props;

  return (
    <li className={styles.roomItem}>
      <div>Room Name: {roomname}</div>
      <div>
        Participants:
        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              {participant[0]} - {participant[1]}
            </li>
          ))}
        </ul>
      </div>
      <ChatUIRoomController/>
    </li>
  );
};

export default ChatUIRoomItem;
