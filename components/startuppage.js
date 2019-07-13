import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Col,
  Form,
  Item,
  Input,
  Label
} from "native-base";

export default class Startuppage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Text style={styles.TitleText}>Moyeo</Text>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block>
            <Text> 로그인 </Text>
          </Button>
          <Card>
            <CardItem style={styles.cardItem}>
              <Icon active name="logo-google" />
              <Text>Google 로그인</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cardItem}>
              <Icon active name="logo-github" />
              <Text>Github 로그인</Text>
            </CardItem>
          </Card>
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
  content: {
    top: 50
  },
  TitleText: {
    left: 120,
    fontSize: 50,
    color: "green"
  },
  footerText: {
    fontSize: 15
  },
  cardItem: {
    left: 120
  },
  container: {
    top: 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
