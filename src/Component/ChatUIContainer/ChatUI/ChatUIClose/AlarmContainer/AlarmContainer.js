import React,{useState} from "react";
import styles from "./AlarmContainer.module.css"
import Alarm from "./Alarm";


const AlarmContainer = (props)=>{

    const [sA,setSA] = useState([]);
    const sampleAlertHandler = (e)=>{
        e.preventDefault();
        setSA((prevState)=>[...prevState,
            <li>
                <Alarm></Alarm>
            </li>
        ]
        );
    };
    return(<div styles={styles.mainframe}>
        <ul>
            {sA}
        </ul>    
        <button onClick={sampleAlertHandler}>

        </button>
    </div>);
}
export default AlarmContainer;