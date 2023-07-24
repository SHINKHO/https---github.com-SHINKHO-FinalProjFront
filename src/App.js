import React, { useState } from "react";
import "./App.css";
import ChatUIContainer from "./Component/ChatUIContainer/ChatUIContainer.js";

function App() {
  // Each room {participants : [[names,sessions]], roomname:name}
  // [ {system} , {dept} , {team} , {DMs}...]
  //      0         1       2         3...
  const [chatRoomList, setChatRoomList] = useState([
    { participants: [["SYSTEM", ""]], roomname: "SYSTEM" }, // system and user one-to-one connection
    { participants: [["", ""]], roomname: "DEPARTMENT" },
    { participants: [["", ""]], roomname: "TEAM" },
  ]);

  const addChatRoom = ({ participants, roomname }) => {
    setChatRoomList((prevState) => [...prevState, { participants, roomname }]);
  };

  //
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
    }
  };

  return (
    <div className="App">
      <ChatUIContainer
        chatRooms={chatRoomList}
        setChatRooms={setChatRoomList}
        addRoom={addChatRoom}
        removeRoom={removeChatRoom}
      />
      <button
        onClick={() =>
          addChatRoom({
            participants: [
              ["testUser", "session1"],
              ["testUser2", "session2"],
              ["testUser3", "session3"],
            ],
            roomname: "huehue",
          })
        }
      ></button>
    </div>
  );
}

export default App;
