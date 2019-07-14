import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Card,
  CardItem,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  View
} from "native-base";

export default class Startuppage extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      isLogin: false,
      clickSignup: false
    };
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <View style={{ left: 120 }}>
            <Text style={styles.TitleText}>Moyeo</Text>
          </View>
          <View style={styles.mainview}>
            <Form>
              <Item inlineLabel last>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Form style={styles.buttonform}>
              <View>
                <Button
                  onPress={() => {
                    return this.props.checkUser();
                  }}
                  block
                  style={{ width: 350 }}
                >
                  <Text> 로그인 </Text>
                </Button>
              </View>
              <View style={{ top: 5 }}>
                <Button
                  onPress={() => {
                    return this.props.clickSignup();
                  }}
                  block
                  style={{ width: 350 }}
                >
                  <Text> 회원가입 </Text>
                </Button>
              </View>
              <Card style={styles.cardItem}>
                <CardItem>
                  <Icon active name="logo-google" />
                  <Text>Google 로그인</Text>
                </CardItem>
              </Card>
              <Card style={styles.cardItem}>
                <CardItem>
                  <Icon active name="logo-github" />
                  <Text>Github 로그인</Text>
                </CardItem>
              </Card>
            </Form>
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

const styles = StyleSheet.create({
  content: {},
  buttonform: {
    alignItems: "center",
    top: 10,
    height: 500
  },
  TitleText: {
    fontSize: 50,
    color: "green"
  },
  footerText: {
    fontSize: 15
  },
  cardItem: {
    alignItems: "center",
    width: 350,
    top: 10
  },
  mainview: {
    top: 100
  }
});
