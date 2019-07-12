import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Form, Item, Input, Footer, FooterTab, Button, Left, Body, Title } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
   padding:10
  }
})

export default class Signup extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
        <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>뒤로가기</Title>
          </Body>
          <Right />  
        </Header>  
        <Content>
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
              <Text>회원 가입 입력</Text>
            </Body>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Region" />
            </Item>
            <Item>
              <Input placeholder="Age" />
            </Item>
            <Item>
              <Input placeholder="Gender" />
            </Item>
          </Form>
          <Button block>
            <Text>회원가입</Text>
          </Button>
        </Content>
        
        <Footer>
          <FooterTab>
            <Button full>
              <Text>(주)Moyeo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

