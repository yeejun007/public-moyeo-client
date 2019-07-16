import React, { Component } from "react";
import { StyleSheet, ListView } from "react-native";
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
import ClientSocket from "../socket/clientsocket";

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
  constructor(props) {
    super(props);
    this.state = {
      Date: "2019년 7월 15일",
      message: null,
      userId: this.props.screenProps.rootState.userId,
      roomId: 1, //this.props.navigation.state.params.roomData.roomId
      nickname: this.props.screenProps.rootState.nickname,
      permissionId: 1, //this.props.navigation.state.params.roomData.permissionId
      poleId: null,
      poleTitle: null,
      poleContent: null,
      expireTime: null,
      promiseTime: null,
      locationX: null,
      locationY: null,
      token: this.props.screenProps.rootState.token,
      messages: [
        {
          userId: 1,
          rommId: 1,
          message: "으으으으음",
          nickname: "송이준",
          createdAt: "23:09"
        },
        {
          userId: 2,
          rommId: 1,
          message: "으으으으음",
          nickname: "민태홍",
          createdAt: "23:14"
        },
        {
          userId: 3,
          rommId: 1,
          message: "으으으으음",
          nickname: "송재영",
          createdAt: "23:15"
        },
        {
          userId: 4,
          rommId: 1,
          message: "으으으으음",
          nickname: "이재익",
          createdAt: "23:33"
        }
      ]
    };

    // ClientSocket.on("messageTclient", data => {
    //   this.state.messages.push(data);
    //   this.setState({});
    // });

    // ClientSocket.on("successPole", data => {
    //   this.setState({
    //     poleId: data.sendPole.id,
    //     poleTitle: data.sendPole.poleTitle,
    //     poleContent: data.sendPole.poleContent,
    //     expireTime: data.sendPole.poleContent,
    //     promiseTime: data.sendPole.promiseTime,
    //     locationX: data.sendPole.locationX,
    //     locationY: data.sendPole.locationY
    //   });
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
  // }

  // sendMessage() {
  // let chat = {
  //   message: this.state.message,
  //   userId: this.state.userId,
  //   roomId: this.state.rommId,
  //   nickname: this.state.nickname,
  //   token: null
  // };
  //   fetch("  ", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token": this.state.token
  //     },
  //     body: JSON.stringify({
  //       chat: chat
  //     })
  //   });
  // }

  render() {
    // this.sendMessage = this.sendMessage.bind(this);

    const chat = {
      userId: this.state.userId,
      roomId: this.state.rommId,
      message: this.state.message,
      nickname: this.state.nickname,
      token: this.state.token
    };

    // ClientSocket.emit("messageFclient", { chat: chat });

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
                  roomData: {
                    permissionId: this.state.permissionId,
                    roomId: this.state.roomId,
                    poleTitle: this.state.poleTitle,
                    poleContent: this.state.poleContent,
                    expireTime: this.state.expireTime,
                    promiseTime: this.state.promiseTime,
                    locationX: this.state.locationX,
                    locationY: this.state.locationY
                  }
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
              // this.sendMessage()
              //   .then(response => {
              //     return response.json();
              //   })
              //   .then(data => {
              //     this.state.messages.push(data);
              //   });
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
