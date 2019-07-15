import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Footer,
  FooterTab,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker
} from "native-base";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 24
  },
  item: {
    bottom: 30
  },
  titletext: {
    fontSize: 25
  },
  completechatroom: {
    marginTop: 30,
    left: 145
  }
});

class ChatroomSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined
    };
  }

  onValueChange1(value: string) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => {
                this.props.navigation.goBack();
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
        <Content>
          <Item style={styles.header}>
            <Body>
              <Text style={styles.titletext}>채팅방 설정</Text>
            </Body>
          </Item>
          <Form>
            <Item floatingLabel>
              <Icon active name="home" />
              <Label>채팅방 제목</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Icon active name="home" />
              <Label>채팅방 인원</Label>
              <Input />
            </Item>
            <Item picker>
              <Label>지역 설정</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Picker.Item label="서울" value="key0" />
                <Picker.Item label="부산" value="key1" />
                <Picker.Item label="광주" value="key2" />
                <Picker.Item label="대전" value="key3" />
                <Picker.Item label="대구" value="key4" />
              </Picker>
              <Label>카테고리</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="혼밥모임" value="key0" />
                <Picker.Item label="공부모임" value="key1" />
                <Picker.Item label="소개팅" value="key2" />
                <Picker.Item label="술모임" value="key3" />
                <Picker.Item label="취미모임" value="key4" />
              </Picker>
            </Item>
          </Form>
          <Button primary style={styles.completechatroom}>
            <Text>채팅방 설정 완료</Text>
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

export default ChatroomSet;
