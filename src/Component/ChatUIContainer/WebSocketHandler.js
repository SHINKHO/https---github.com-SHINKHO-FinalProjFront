const socketURL = "ws://192.168.1.53/proj/chat";
const websock = null;

const establishConn = () => {
  ws = new WebSocket(socketURL);
  ws.onopen= ()=>{
    
  }
};
