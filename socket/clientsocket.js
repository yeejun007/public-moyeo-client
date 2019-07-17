// import SocketIoClient from "socket.io-client";
// // socket.io-client/dist/socket.io.js
// // const SocketIoClient = require("socket.io-client");

// const socket = SocketIoClient("http://127.0.0.1:3002/", {
//   transports: ["websocket"],
//   forceNew: true,
//   secure: true,
//   timeout: 10000,
//   jsonp: false,
//   autoConnect: false,
//   agent: "-",
//   path: "/", // Whatever your path is
//   pfx: "-",
//   // key: token, // Using token-based auth.
//   // passphrase: cookie, // Using cookie auth.
//   cert: "-",
//   ca: "-",
//   ciphers: "-",
//   rejectUnauthorized: "-",
//   perMessageDeflate: "-"
// });

// this.socket.emit("newChatFclient", "안녕 서버야");
// this.socket.on("newDataTclient", data => {
//   console.log("서버로부터 받은 응답: ", data);
// });

// socket.connect();

// export default socket;

// 다른 페이지에서 여기서 export한 socket을 import해서 사용할때 다시 이 페이지를 읽는가 하는것
