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
import ClientSocket from "../socket/clientsocket";

const styles = StyleSheet.create({
  chatheader: {
    marginTop: 25
  },
  chatinput: {
    width: 300
  },
  footeritem: {
    flexDirection: "row",
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
      newUser: this.props.screenProps.rootState.nickname,
      message: null,
      userId: this.props.screenProps.rootState.userId,
      roomId: this.props.navigation.state.params.roomData.roomId, // 태홍님한테 받는거
      nickname: this.props.screenProps.rootState.nickname,
      permissionId: this.props.navigation.state.params.roomData.permissionId, // 태홍님한테 받는거
      poleId: null,
      poleTitle: null,
      poleContent: null,
      expireTime: null,
      promiseTime: null,
      locationX: null,
      locationY: null,
      poleResult: false,
      token: this.props.screenProps.rootState.token,
      messages: [
        {
          userId: 1,
          rommId: 1,
          message: "으으으으음",
          nickname: "송이준",
          createdAt: "23:09"
        }
      ]
    };

    this.alertMessage = `${this.state.newUser} 님이 입장하였습니다`;

    ClientSocket.emit("ServerEntryRoom", {
      data: {
        roomId: this.state.roomId,
        userId: this.state.userId,
        nickname: this.state.nickname,
        token: this.state.token
      }
    });

    ClientSocket.on("ClientEntryRoom", data => {
      this.state.newUser = data.nickname.nickname;
      this.setState({});
    });

    ClientSocket.on("messageTclient", data => {
      this.state.messages.push(data);
      this.setState({});
    });

    ClientSocket.on("resultPole", data => {
      this.setState({ poleResult: data.result });
    });

    ClientSocket.on("successPole", data => {
      this.setState({
        poleId: data.sendPole.id,
        poleTitle: data.sendPole.poleTitle,
        poleContent: data.sendPole.poleContent,
        expireTime: data.sendPole.poleContent,
        promiseTime: data.sendPole.promiseTime,
        locationX: data.sendPole.locationX,
        locationY: data.sendPole.locationY
      });
    });
  }

  sendMessage(ele) {
    ClientSocket.emit("messageFclient", { chat: ele });
    this.setState({}); // 이거 안쓰면 빨간줄 생겨서 씀
  }

  alertNewUser() {
    setTimeout(() => {
      this.alertMessage = "";
      this.setState({});
    }, 2000);
    return this.alertMessage;
  }

  render() {
    this.sendMessage = this.sendMessage.bind(this);
    this.alertNewUser = this.alertNewUser.bind(this);

    let chat = {
      userId: this.state.userId,
      roomId: this.state.rommId,
      message: this.state.message,
      nickname: this.state.nickname,
      token: this.state.token
    };

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
                  poleData: {
                    permissionId: this.state.permissionId,
                    roomId: this.state.roomId,
                    poleId: this.state.poleId,
                    poleTitle: this.state.poleTitle,
                    poleContent: this.state.poleContent,
                    expireTime: this.state.expireTime,
                    promiseTime: this.state.promiseTime,
                    locationX: this.state.locationX,
                    locationY: this.state.locationY,
                    poleResult: this.state.poleResult
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20
          }}
        >
          <Text>
            {this.state.nickname === this.state.newUser
              ? ""
              : this.alertNewUser()}
          </Text>
        </View>
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
              this.sendMessage(chat);
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
