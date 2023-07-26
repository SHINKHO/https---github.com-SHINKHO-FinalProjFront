import React from "react";

const Chats = (props)=>{

    console.log(props.children);

    return(<div>{props.children}</div>);
}

export default Chats;