import React, { useState } from "react";
import styles from "./ChatRoomController.module.css";
import UploadFile from "./UploadFile";

const ChatRoomController = (props) => {
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => setContent((prevState) => e.target.value);

  const submitChatHandler = (e) => {
    e.preventDefault();
    if (content !== "" && props.currentRoom!==0) {
      const { curUserId, curUser } = props.userInfo;
      console.log(curUserId, curUser);
      props.addChat(props.currentRoom, curUserId, curUser, content);
      setContent("");
    }
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    console.log("uploaded");
  };

  return (
    <div>
      <UploadFile onUpload={uploadHandler} />
      <form onSubmit={submitChatHandler}>
        <label></label>
        <input type="text" value={content} onChange={onChangeHandler} />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

export default ChatRoomController;
