import React from "react";
import styles from "./ChatUIRoomController.module.css";

const ChatUIRoomController = (props) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={props.enterRoomHandler}>enter</button>
        </li>
        <li>
          <button onClick={props.removeRoom}>delete</button>
        </li>
      </ul>
    </div>
  );
};

export default ChatUIRoomController;
