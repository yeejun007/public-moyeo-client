import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Button,
  Icon,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import ClientSocket from "../socket/clientsocket";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400
  },
  content: {
    height: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d6d7da"
  },
  button: {
    alignItems: "center"
  },
  yesorno: {
    flex: 1,
    flexDirection: "row",
    left: 5
  },
  yes: {
    left: 40,
    marginTop: 30,
    width: 150,
    marginRight: 10
  },
  no: {
    left: 40,
    marginTop: 30,
    width: 150,
    marginRight: 10
  },
  mapcontent: {
    marginTop: 20,
    height: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d6d7da"
  }
});

class SettingVote extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navi);
    this.state = {
      poleTitle: null,
      roomId: this.props.navi.navigation.state.params.roomData.roomId,
      poleContent: null,
      expireTime: null,
      promiseTime: null,
      locationX: 1345.132331,
      locationY: 14551.23111,
      token: this.props.navi.screenProps.rootState.token
    };
  }

  render() {
    // let roomId = this.props.navi.navigation.state.params.roomData.roomId;
    // console.log(this.props.navi.navigation.state.params.roomData);
    // console.log(this.state.roomId);
    console.log(this.state);
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Form>
            <Item floatingLabel>
              <Label>투표제목</Label>
              <Input
                onChangeText={text => {
                  this.setState({
                    poleTitle: text
                  });
                }}
              />
            </Item>
          </Form>
          <Form>
            <Item floatingLabel>
              <Label>약속시간(년YYYY,월MM,일DD,시HH,분MM)</Label>
              <Input
                onChangeText={text => {
                  this.setState({
                    expireTime: text
                  });
                }}
              />
            </Item>
          </Form>
          <Form>
            <Item floatingLabel>
              <Label>장소, 방장전달사항 입력</Label>
              <Input
                onChangeText={text => {
                  this.setState({
                    poleContent: text
                  });
                }}
              />
            </Item>
          </Form>
          <Content style={styles.mapcontent}>
            <Text>만날장소 카카오맵</Text>
          </Content>
          <Form style={styles.yesorno}>
            <Button style={styles.yes}>
              <Icon name="md-thumbs-up" />
              <Text>확인</Text>
            </Button>
            <Button style={styles.no}>
              <Icon name="md-thumbs-down" />
              <Text>취소</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SettingVote;
