import React, { useState } from "react";
import "./App.css";
import ChatUIContainer from "./Component/ChatUIContainer/ChatUIContainer.js";

function App() {
  const userInfo = {
    curUser :"tester",
    curUserId : "testId"
  }
  //fields something
  //                              at 0 is owner of the room
  // Each room {participants : [user:{userId,name},...], roomname:name}
  // [ {system} , {dept} , {team} , {DMs}...]
  //      0         1       2         3...
  const [chatRoomList, setChatRoomList] = useState([
    {
      participants: [{ user: { uid: "SYSTEM", name: "시스템 메세지" } }],
      roomname: "SYSTEM",
    }, // system and user one-to-one connection
    { participants: [{ user: { uid: "SYSTEM", name: "시스템 메세지" } }], roomname: "DEPARTMENT" },
    { participants: [{ user: { uid: "SYSTEM", name: "시스템 메세지" } }], roomname: "TEAM" },
  ]);
  // each index refers the room
  //const [[{user:{uid:, name:}, content:},...],[{user:{uid:,name:},content:},...]]
  //const   0                                    1
  const [chats, setChats] = useState([
    [
      {
        user: { uid: "SYSTEM", name: "시스템 메세지" },
        content: "시작",
        date: new Date()
      },
    ],
    [
    ],
    [
      {
        user: { uid: "SYSTEM", name: "시스템 메세지" },
        content: "시작",
        date: new Date()
      },
    ],
  ]);
  //chatroom control
  const addChatRoom = (uid = userInfo.curUserId, name = userInfo.curUser, roomname) => {
    // Check if the room already exists
    const roomExists = chatRoomList.some((room) => room.roomname === roomname);

    if (roomExists) {
      console.error(`Room "${roomname}" already exists.`);
      return;
    }

    // Add the chat room with the owner as the first participant
    setChatRoomList((prevState) => [
      ...prevState,
      {
        participants: [{ user: { uid: uid, name: name }}],
        roomname,
      },
    ]);

    //add an array to the chats
    setChats((prevState) => [
      ...prevState,
      [
        {
          user: { uid: uid, name: name },
          content: `${uid}가 ${roomname}방을 만듬`,
          date: new Date()
        },
      ],
    ]);
  };
  const removeChatRoom = (room_idx) => {
    if (room_idx < 0) {
      //caution message : no less then 0;
    } else if (room_idx < 3) {
      //caution message : default Rooms cannot be removed by user.
    } else if (room_idx >= chatRoomList.length) {
      //caution message : room index exceeded
    } else {
      setChatRoomList((prevState) =>
        prevState.filter((element, index) => index !== room_idx)
      );
      setChats((prevState) =>
        prevState.filter((element, index) => index !== room_idx)
      );
    }
  };
  //chat controll
  const addNewChat = (room_idx, uid, name, content) => {
    // Create a new chat object
    const newChat = {
      user: { uid: uid, name: name },
      content: content,
      date: new Date()
    };
    console.log("newChat",newChat);
    setChats((prevState) => {
      // Clone the previous state to avoid mutating the original state directly
      const newState = [...prevState];

      // Check if the room index is within the bounds of the chat array
      if (room_idx >= 0 && room_idx < newState.length) {
        // Add the new chat object to the specified room's chats array
        newState[room_idx].push(newChat);
      } else {
        // Handle the case when the room index is invalid (e.g., out of bounds)
        console.error("Invalid room index:", room_idx);
      }

      return newState;
      
    });
    console.log("newChats",chats)
    //some backend process remove from the joined rooms
  };

  //add user to the Room
  const inviteUser = (uid,uname,room_idx)=> {
    //something backend should be listed here
    //1.checking if user is in db
    //2.checking if user is already here
    let participantExists = chatRoomList[room_idx].participants.some(
      (participant) => participant.user.uid === uid
    );
      if(!participantExists){
        setChatRoomList((prevState) => {
          const newChatRoomList = [...prevState];
          newChatRoomList[room_idx].participants.push({ user: { uid: uid, name: uname } });
          return newChatRoomList;
          //let the system prompt message to the invited user
        });
      } else{
        //make the line red and show small text to it is already exist or not avail
      }

  };

  const submitChatHandler = (e) => {
    e.preventDefault();
    
    addNewChat(0,"SYSTEM" ,"시스템 메세지" ,"checking")
  };

  return (
    <div className="App">
      <ChatUIContainer
        chatRooms={chatRoomList}
        setChatRooms={setChatRoomList}
        addRoom={addChatRoom}
        removeRoom={removeChatRoom}
        chats={chats}
        addChat={addNewChat}
        userInfo={userInfo}
      />
      <button
      onClick={submitChatHandler}
      >
        시스템 메세지 테스트
      </button>
    </div>
  );
}

export default App;
