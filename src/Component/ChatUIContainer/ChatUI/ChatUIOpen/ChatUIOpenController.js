import React from "react";
import styles from "./ChatUIOpenController.module.css";
import UploadFile from "./ChatRoom/UploadFile";

const ChatUIOpenController = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const inputKeyWordHandler = (e)=>{
    props.keyWordHandler(e.target.value);
    console.log(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>search</label>
        <input type="text" value={props.keyWord} onChange={inputKeyWordHandler} />
      </form>
    </div>
  );
};

export default ChatUIOpenController;
