import React from "react";
import styles from "./ChatRoom.module.css";
import Chats from "./Chats";

const ChatRoom = (props) => {
  console.log(props.chatRooms[0].participants[0], props.userInfo);
  const head = (
    <div>
      <button onClick={props.exitRoom}>리스트로</button>
      {<button onClick={props.inviteUser}>사용자초대</button>}
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
    console.log(
      "from chatlist, checking curuser and chatting user is equal",
      props.userInfo.curUserId,
      item.user.uid
    );
    const isYou = props.userInfo.curUserId === item.user.uid;
    if (isYou) {
      return <ChatMine key={index} item={item} index={index} />;
    } else if (!isYou) {
      return <ChatOthers key={index} item={item} index={index} />;
    }
  });

  return (
    <div className={styles.chats}>
      {head}
      <Chats>{chatList}</Chats>
    </div>
  );
};

const ChatMine = (props) => {
  const { item, index } = props;
  return (
    <li key={index} style={{ color: "red" }}>
      <hr />
        <h5>{item.user.name}</h5>
        <p>{item.content}</p>
        <h6>{timeConversion(Date.now()-item.date)}</h6>{" "}
    </li>
  );
};

const ChatOthers = (props) => {
  const { item, index } = props;
  return (
    <li key={index} style={{ color: "black" }}>
      <hr />
        <h5>{item.user.name}</h5>
        <p>{item.content}</p>
        <h6>{timeConversion(Date.now()-item.date)}</h6>{" "}
    </li>
  );
};

const timeConversion=(timeGap)=>{
  if(timeGap<1000*60){
    return "최근"
  }else if (timeGap<1000*60*60){
    return `${parseInt(timeGap/(1000*60))}분 전`
  }else if (timeGap<1000*60*60*24){
    return `${parseInt(timeGap/(1000*60*60))}시간 전`
  }else if (timeGap<1000*60*60*24*30){
    return `${parseInt(timeGap/(1000*60*60*24))}일 전`
  }else {
    return new Date(timeGap).toLocaleDateString;
  }

}

export { Chats, ChatMine, ChatOthers };

export default ChatRoom;
