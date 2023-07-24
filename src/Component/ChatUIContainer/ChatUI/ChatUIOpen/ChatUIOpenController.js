import React from "react";
import styles from "./ChatUIOpenController.module.css";
import UploadFile from "./ChatRoom/UploadFile";

const ChatUIOpenController = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>search</label>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ChatUIOpenController;
