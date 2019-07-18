import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Form,
  Item,
  Input,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Title,
  View
} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 10,
    top: 24,
    marginBottom: 0
  },
  content: {
    top: 100
  },
  footerText: {
    fontSize: 15
  }
});

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      nickname: null,
      region: null,
      age: null,
      gender: null
    };
  }

  sendUserInfo() {
    return fetch("http://13.209.76.220:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
        region: this.state.region,
        age: this.state.age,
        gender: this.state.gender
      })
    });
  }

  render() {
    this.sendUserInfo = this.sendUserInfo.bind(this);

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => {
                this.props.gobackMain();
              }}
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>뒤로가기</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem>
              <Icon active name="logo-google" />
              <Text>Google 회원가입</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="logo-github" />
              <Text>Github 회원가입</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Form>
            <Body>
              <Text style={{ fontSize: 20 }}> * 회원 가입 입력 * </Text>
            </Body>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ email: text });
                }}
                placeholder="Email"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ password: text });
                }}
                placeholder="Password"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ nickname: text });
                }}
                placeholder="Nickname"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ region: text });
                }}
                placeholder="Region"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ age: text });
                }}
                placeholder="Age"
              />
            </Item>
            <Item>
              <Input
                onChangeText={text => {
                  this.setState({ gender: text });
                }}
                placeholder="Gender"
              />
            </Item>
          </Form>
          <View>
            <Button
              onPress={() => {
                this.sendUserInfo()
                  .then(response => {
                    return response.json();
                  })
                  .then(result => {
                    if (result.success === true) {
                      this.props.gobackMain();
                    }
                  });
              }}
              block
            >
              <Text>회원가입</Text>
            </Button>
          </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text style={styles.footerText}>(주)Moyeo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
