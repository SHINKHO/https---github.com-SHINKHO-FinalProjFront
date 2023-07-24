import React from "react";
import styles from "./UploadFile.module.css"

const UploadFile = (props)=>{    
    return(
        <button onClick={props.onUpload}>upload file</button>
    );
}

export default UploadFile;