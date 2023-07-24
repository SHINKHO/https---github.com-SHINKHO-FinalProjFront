import React from "react";
import styles from "./ChatRoomController.module.css";
import UploadFile from "./UploadFile";

const ChatRoomController = (props)=>{
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
      };
    
      const uploadHandler = (e) => {
        e.preventDefault();
        console.log("uploaded");
      };
    
      return (
        <div>
          <UploadFile onUpload={uploadHandler} />
          <form onSubmit={submitHandler}>
            <label></label>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            <button type="submit"></button>
          </form>
        </div>
      );
}

export default ChatRoomController;