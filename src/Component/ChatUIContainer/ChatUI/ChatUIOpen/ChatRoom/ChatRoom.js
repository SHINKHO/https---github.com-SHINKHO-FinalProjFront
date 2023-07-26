import React from "react";
import styles from "./ChatRoom.module.css";
import Chats from "./Chats";

const ChatRoom = (props) => {
  const head = (
    <div>
      <button onClick={props.exitRoom}>나가기</button>
      <p>{props.chatRooms[props.currentRoom].roomname}</p>
      <ul>
        {props.chatRooms[props.currentRoom].participants.map(
          (participant, index) => (
            <li key={index}>{participant.user.name}</li>
          )
        )}
      </ul>
    </div>
  );

  const chatList = props.chats[props.currentRoom].map((item, index) => {
    console.log(props.userInfo.curUserId, item.user.uid);
    const isYou = props.userInfo.curUserId === item.user.uid;
    if (isYou) {
      return <ChatMine key={index} item={item} index={index}/>
    } else if (!isYou) {
      return <ChatOthers key={index} item={item} index={index}/>
    }
  });

  return (
    <div>
      {head}
      <Chats>{chatList}</Chats>
    </div>
  );
};

const ChatMine = (props) => {
  const { item , index } = props;
  return (
    <li key={index} style={{ color: "red" }}>
      ___________________________
      <ul>
        <li>{item.user.name}</li>
        <li>{item.content}</li>
        <li>{new Date(item.date).toLocaleString()}</li>{" "}
      </ul>
    </li>
  );
};

const ChatOthers = (props) => {
  const { item , index } = props;
  return (
    <li key={index} style={{ color: "black" }}>
      __________________________
      <ul>
        <li>{item.user.name}</li>
        <li>{item.content}</li>
        <li>{new Date(item.date).toLocaleString()}</li>{" "}
      </ul>
    </li>
  );
};

export { Chats, ChatMine, ChatOthers };

export default ChatRoom;
