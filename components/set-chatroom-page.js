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
      setRoom: undefined,
      token: this.props.screenProps.rootState.token,
      userId: this.props.screenProps.rootState.userId,
      roomSubject: undefined,
      attendance: undefined,
      selected1: undefined,
      selected2: undefined,
      region: this.props.navigation.state.params.region,
      category: this.props.navigation.state.params.category
    };
    console.log("settting chat room page state===========", this.state);
  }

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  onChangeText1(value) {
    this.setState({
      roomSubject: value
    });
  }

  onChangeText2(value) {
    this.setState({
      attendance: value
    });
  }

  serverData = (roomData, callback) => {
    fetch(`http://13.209.76.220:3000/rooms/`, {
      // headers: {
      //   "x-access-token" : this.state.token,
      //   "Content-Type": "application/json"
      // }
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(roomData)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // console.log(json.data)
        callback(json.data);
      })
      .catch(err => console.log(err));
  };

  createClicked = () => {
    // console.log('this.roomData--->', this.roomData)
    // event.preventDefault();
    this.serverData(this.roomData, this.createRoom);
  };

  createRoom = result => {
    this.setState({
      setRoom: result
    });
    this.props.navigation.navigate("Chattingroom", {
      roomData: this.state.setRoom
    });
  };

  render() {
    this.onChangeText1 = this.onChangeText1.bind(this);
    this.onChangeText2 = this.onChangeText2.bind(this);
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);

    this.roomData = {
      roomTitle: this.state.roomSubject,
      roomSize: Number(this.state.attendance),
      region: this.state.selected1,
      category: this.state.selected2,
      userId: this.state.userId
    };

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
              <Input onChangeText={this.onChangeText1} />
            </Item>
            <Item floatingLabel last>
              <Icon active name="home" />
              <Label>채팅방 인원</Label>
              <Input onChangeText={this.onChangeText2} />
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
                onValueChange={this.onValueChange1}
              >
                {this.state.region.map(val => {
                  return <Picker.Item label={val} value={val} key={val} />;
                })}
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
                onValueChange={this.onValueChange2}
              >
                {this.state.category.map(val => {
                  return <Picker.Item label={val} value={val} key={val} />;
                })}
              </Picker>
            </Item>
          </Form>
          <Button
            primary
            style={styles.completechatroom}
            onPress={() => {
              this.createClicked();
            }}
          >
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
