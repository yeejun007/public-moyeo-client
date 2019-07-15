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
  Input,
  Form
} from "native-base";
import Chatcontent from "./chatcontent";

const fetch = require("node-fetch");

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
  constructor() {
    super();
    this.state = {
      Date: "2019년 7월 15일",
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
  }

  render() {
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
                this.props.navigation.navigate("Chattingmenu");
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
                  key={ms.userid}
                  userIdS={this.props.screenProps.rootState.userId}
                />
              );
            })}
          </Form>
        </Content>
        <Form regular style={styles.footeritem}>
          <Form>
            {/* Input 대신 react-native의 TextInput을 사용한다 */}
            <Input style={styles.chatinput} placeholder="내용을 입력하세요" />
          </Form>
          <Button bordered>
            <Text>send</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
