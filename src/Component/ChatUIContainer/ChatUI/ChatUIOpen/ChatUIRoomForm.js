import React, {useState} from "react";
import styles from './ChatUIRoomForm.module.css'

const ChatUIRoomForm = (props)=>{
    const [roomName,setRoomName]=useState("");


    const makeRoomSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(roomName);
        props.addRoom(props.userInfo.userId,props.userInfo.userName,roomName);
        props.cancelButtonHandler();
    }

    return(
        <form onSubmit={makeRoomSubmitHandler}>
            <label>roomname</label>
            <input type="text" onChange={e=>setRoomName(e.target.value)} value={roomName}></input>
            <button type="submit">generate</button>
            <button type="button" onClick={props.cancelButtonHandler}>cancel</button>
        </form>
    )
}

export default ChatUIRoomForm;