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
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isLogin,
      email: null,
      password: null
    };
  }

  checkUser() {
    // this.setState({ isLogin: true });
    return fetch("http://13.209.76.220:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.state.isLogin = result.isLogin;
        // if (this.state.token) {
        //   this.state.token = result.token;
        // }
        console.log(this.state.isLogin);
        console.log(this.props);
        if (this.state.isLogin) {
          this.props.LoginSuccess();
          this.props.gobackMain();
        }
      });
  }

  render() {
    this.checkUser = this.checkUser.bind(this);

    return (
      <Container>
        <Content style={styles.content}>
          <View style={{ left: 120, top: 30 }}>
            <Text style={styles.TitleText}>Moyeo</Text>
          </View>
          <View style={styles.mainview}>
            <Form>
              <Item inlineLabel last>
                <Label>Email</Label>
                <Input
                  onChangeText={text => {
                    this.setState({
                      email: text
                    });
                  }}
                />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input
                  onChangeText={text => {
                    this.setState({
                      password: text
                    });
                  }}
                />
              </Item>
            </Form>
            <Form style={styles.buttonform}>
              <View>
                <Button
                  onPress={() => {
                    return this.checkUser();
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
