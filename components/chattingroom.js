import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
  Form,
  Input
} from "native-base";
import Chatcontent from "./chatcontent";

// import SocketIoClient from "socket.io-client";
// socket.io-client/dist/socket.io.js
const SocketIoClient = require("socket.io-client");

const styles = StyleSheet.create({
  chatheader: {
    marginTop: 25
  },
  chatinput: {
    width: 300
  },
  footeritem: {
    // marginRight: 65,
    flexDirection: "row",
    // justifyContent: "space-between",
    bottom: 10,
    left: 20
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  chatDate: {
    marginTop: 10,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default class Chattingroom extends Component {
  constructor() {
    super();
    this.state = {
      Date: "2019년 7월 15일",
      message: null,
      userId: null,
      roomId: null,
      nickname: null,
      token: null,
      messages: [
        {
          userId: 1,
          rommid: 1,
          message: "으으으으음",
          nickname: "송이준",
          createdAt: "23:09"
        },
        {
          userId: 2,
          rommid: 1,
          message: "으으으으음",
          nickname: "민태홍",
          createdAt: "23:14"
        },
        {
          userId: 3,
          rommid: 1,
          message: "으으으으음",
          nickname: "송재영",
          createdAt: "23:15"
        },
        {
          userId: 4,
          rommid: 1,
          message: "으으으으음",
          nickname: "이재익",
          createdAt: "23:33"
        }
      ]
    };

    // this.socket = SocketIoClient("http://127.0.0.1:3002/", {
    //   transports: ["websocket"],
    // forceNew: true,
    // secure: true,
    // timeout: 10000,
    // jsonp: false,
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
  }

  // componentDidMount() {
  //   const socket = io("http://127.0.0.1:3000/", {
  //     transports: ["websocket"],
  //     forceNew: true,
  //     secure: true,
  //     timeout: 10000,
  //     jsonp: false,
  //     autoConnect: false,
  //     agent: "-",
  //     path: "/", // Whatever your path is
  //     pfx: "-",
  //     // // // key: token, // Using token-based auth.
  //     // // // passphrase: cookie, // Using cookie auth.
  //     cert: "-",
  //     ca: "-",
  //     ciphers: "-",
  //     rejectUnauthorized: "-",
  //     perMessageDeflate: "-",
  //     forceBase64: 1
  //   });

  //   socket.connect();

  //   socket.on("connect", () => {
  //     console.log("=============서버와 소켓 연결===============");
  //   });

  //   socket.emit("messageFclient", data => {
  //     console.log("서버로 보내는 데이터: ", data);
  //   });
  // }
  componentDidMount() {
    this.setState({
      userId: this.props.screenProps.rootState.userId,
      nickname: this.props.screenProps.rootState.nickname,
      roomId: null
    }); //메인페이지 스크린으로부터 roomId를 넘겨받아야한다.
  }

  sendMessage() {
    let chat = {
      message: this.state.message,
      userId: this.state.userId,
      roomId: this.state.rommId,
      nickname: this.state.nickname,
      token: null
    };
    fetch("  ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.state.token
      },
      body: JSON.stringify({
        chat: chat
      })
    });
  }

  render() {
    this.sendMessage = this.sendMessage.bind(this);

    return (
      <Container style={styles.container}>
        <Header style={styles.chatheader}>
          <Left>
            <Button
              onPress={() => {
                return this.props.navigation.goBack();
              }}
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Title>방 제목</Title>
          </Body>
          <Right>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Chattingmenu", {
                  roomData: { permissionId: 1 }
                  // 아래가 실제로 써야할 코드임
                  // roomData: this.props.navigation.state.params.roomData
                });
              }}
              transparent
            >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form style={styles.chatDate}>
            <View>
              <Text>{this.state.Date}</Text>
            </View>
          </Form>
          <Form>
            {this.state.messages.map(ms => {
              return (
                //유저 자신을 구분하기 위해 처음 로그인 할때 nickname 정보를 서버로부터 받아야함
                <Chatcontent
                  userId={ms.userId}
                  nickname={ms.nickname}
                  message={ms.message}
                  createdAt={ms.createdAt}
                  key={ms.userId}
                  userIdS={this.props.screenProps.rootState.userId}
                />
              );
            })}
          </Form>
        </Content>
        <Form regular style={styles.footeritem}>
          <Form>
            <Input
              onChangeText={text => this.setState({ message: text })}
              style={styles.chatinput}
              placeholder="내용을 입력하세요"
            />
          </Form>
          <Button
            onPress={() => {
              this.sendMessage()
                .then(response => {
                  return response.json();
                })
                .then(data => {
                  this.state.messages.push(data);
                });
            }}
            bordered
          >
            <Text>send</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
