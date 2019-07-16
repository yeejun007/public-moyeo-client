import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input,
  Form
} from "native-base";

export default class Chattingroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //roomData: this.props.navigation.state.params.roomData
    };
    console.log('serchRoom--->', this.props.navigation.state.params.roomData)
    //console.log('setChatRoom---->',this.props.navigation.state.params.roomData)
    //console.log('this.state--->', this.state.roomData)
    //console.log('mychatting---->', this.props.navigation.state.params.roomData)
  }

  render() {
    
    return (
      <Container style={styles.container}>
        <Header style={styles.chatheader}>
          <Left>
            <Button transparent>
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
        <Content></Content>
        <Form regular style={styles.footeritem}>
          <Form>
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

const styles = StyleSheet.create({
  header: {
    marginTop: 50
  },
  chatheader: {
    top: 24
  },
  body: {
    alignItems: "center"
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
  }
});
