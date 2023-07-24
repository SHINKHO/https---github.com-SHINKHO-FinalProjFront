import React from "react";
import styles from "./ChatRoom.module.css";
import Chats from "./Chats";
import RoomHeader
 from "./RoomHeader";
const ChatRoom = (props)=>{

    return(
        <div>
            <RoomHeader/>
            <Chats/>
        </div>
    );
}

export default ChatRoom;