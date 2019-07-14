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
          userid: 1,
          rommid: 1,
          message: "으으으으으으으으음",
          nickname: "이준킹",
          createdAt: "2019년 7월 15일"
        },
        {
          userid: 2,
          rommid: 1,
          message: "으으으으으으으으음",
          nickname: "태홍킹",
          createdAt: "2019년 7월 15일"
        },
        {
          userid: 3,
          rommid: 1,
          message: "으으으으으으으으음",
          nickname: "재영킹",
          createdAt: "2019년 7월 15일"
        },
        {
          userid: 4,
          rommid: 1,
          message: "으으으으으으으으음",
          nickname: "재익킹",
          createdAt: "2019년 7월 15일"
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
          {this.state.messages.map(ms => {
            return (
              //유저 자신을 구분하기 위해 처음 로그인 할때 nickname 정보를 서버로부터 받아야함
              <Chatcontent
                nickname={ms.nickname}
                message={ms.message}
                createdAt={ms.createdAt}
                key={ms.userid}
                userNickname={this.props.screenProps.rootState.nickname}
              />
            );
          })}
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
