import AlarmContainer from './AlarmContainer/AlarmContainer';
import React,{useState} from 'react';
import styles from './ChatUIClose.module.css'

const ChatUIClose = (props)=>{
    return(
        <AlarmContainer notices={props.notices}/>
    );

}

export default ChatUIClose;