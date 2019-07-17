import SocketIoClient from "socket.io-client";
// socket.io-client/dist/socket.io.js
// const SocketIoClient = require("socket.io-client");

const socket = SocketIoClient("http://13.209.76.220:3000", {
  transports: ["websocket"]
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
});

socket.connect();

export default socket;

// 다른 페이지에서 여기서 export한 socket을 import해서 사용할때 다시 이 페이지를 읽는가 하는것
