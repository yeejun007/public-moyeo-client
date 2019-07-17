import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Button,
  Icon,
  Content,
  Text,
  ActionSheet,
  Form,
  Root,
  View
} from "native-base";
import ClientSocket from "../socket/clientsocket";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  button: {
    alignItems: "center"
  },
  buttonHide: {
    display: "none"
  },
  yesorno: {
    flex: 1,
    flexDirection: "row",
    left: 5,
    top: 10
  },
  anotherYesOrNo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  yes: {
    width: 150,
    marginRight: 10
  },
  no: {
    width: 150,
    marginRight: 10
  }
});

class SelectVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onVote: this.props.navi.screenProps.rootState.onVote,
      token: this.props.navi.screenProps.rootState.token,
      userId: this.props.navi.screenProps.rootState.userId,
      roomId: this.props.navi.navigation.state.params.roomData.roomId,
      host: this.props.navi.navigation.state.params.roomData.permissionId,
      expireTime: this.props.navi.navigation.state.params.roomData.expireTime,
      locationX: null,
      locationY: null,
      poleContent: this.props.navi.navigation.state.params.roomData.poleContent,
      poleTitle: this.props.navi.navigation.state.params.roomData.poleTitle,
      promiseTime: this.props.navi.navigation.state.params.roomData.promiseTime,
      clicked: "",
      yes: 0,
      no: 0,
      yesOrno: null
    };

    // ClientSocket.on("returnAttendence", data => {
    //   this.setState({
    //     yes: data.result.agree.count,
    //     no: data.result.disagree.count,
    //   });
    // });
  }

  render() {
    const BUTTONS = ["투표종료", "취소"];
    const CANCEL_INDEX = BUTTONS.length - 1;

    let attendence = {
      att: this.state.yesOrno,
      roomId: this.state.roomId,
      userId: this.state.userId,
      poleId: null,
      token: this.state.token
    };

    if (this.state.clicked === "투표종료") {
      this.props.navi.navigation.goBack();
    }

    return (
      <Root>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <Text>약속시간</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만날장소 (카카오맵)</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만료 날짜(날짜표기)</Text>
          </Content>
          <Content padder>
            <Button
              block
              style={
                this.state.userId === this.state.host
                  ? styles.button
                  : styles.buttonHide
              }
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    title: "투표를 종료하시겠습니까?"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )
              }
            >
              <Text>투표종료</Text>
            </Button>
            {this.state.onVote === true ? (
              <Form style={styles.yesorno}>
                <Button
                  onPress={() => {
                    this.setState({
                      yesOrno: true
                    });
                    ClientSocket.emit("attendencePole", {
                      attendence: attendence
                    });
                  }}
                  style={styles.yes}
                >
                  <Icon name="md-thumbs-up" />
                  <Text>찬성 {"       " + this.state.yes}</Text>
                </Button>
                <Button
                  onPress={() => {
                    this.setState({
                      yesOrno: false
                    });
                    ClientSocket.emit("attendencePole", {
                      attendence: attendence
                    });
                  }}
                  style={styles.no}
                >
                  <Icon name="md-thumbs-down" />
                  <Text>반대 {"       " + this.state.no}</Text>
                </Button>
              </Form>
            ) : (
              <Form style={styles.yesorno}>
                <View>
                  <Text>찬성 {this.state.yes}</Text>
                </View>
                <View>
                  <Text>반대 {this.state.no}</Text>
                </View>
              </Form>
            )}
          </Content>
        </Container>
      </Root>
    );
  }
}

export default SelectVote;
