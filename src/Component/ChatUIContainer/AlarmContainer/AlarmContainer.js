import React,{useState} from "react";
import styles from "./AlarmContainer.module.css"

const AlarmContainer = (props)=>{

    return(<div styles={styles.mainframe}>
        <ul>
            <li>
                <h4>Title</h4>
                <p>Message</p>
            </li>
            <li>
                <h4>Title</h4>
                <p>Message</p>
            </li>
            <li>
                <h4>Title</h4>
                <p>Message</p>
            </li>
        </ul>
        
        
    </div>);
}
export default AlarmContainer;