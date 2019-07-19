import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Root,
  Container,
  Button,
  Icon,
  Content,
  Text,
  ActionSheet,
  Form,
  View
} from "native-base";
import ClientSocket from "../socket/clientsocket";

const styles = StyleSheet.create({
  container: {},
  content: {
    width: 350,
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
    left: 10,
    top: 10
  },
  anotherYesOrNo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    top: 10,
    width: 150,
    marginLeft: 90
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
      onVote: this.props.navi.navigation.state.params.poleData.onVote,
      token: this.props.navi.screenProps.rootState.token,
      userId: this.props.navi.screenProps.rootState.userId,
      roomId: this.props.navi.navigation.state.params.poleData.roomId,
      host: this.props.navi.navigation.state.params.poleData.permissionId,
      poleId: this.props.navi.navigation.state.params.poleData.poleId,
      expireTime: this.props.navi.navigation.state.params.poleData.expireTime,
      locationX: this.props.navi.navigation.state.params.poleData.locationX,
      locationY: this.props.navi.navigation.state.params.poleData.locationY,
      poleContent: this.props.navi.navigation.state.params.poleData.poleContent,
      poleTitle: this.props.navi.navigation.state.params.poleData.poleTitle,
      promiseTime: this.props.navi.navigation.state.params.poleData.promiseTime,
      clicked: "",
      yes: 0,
      no: 0,
      poleResult: this.props.navi.navigation.state.params.poleData.poleResult
    };

    ClientSocket.on("returnAttendence", data => {
      this.setState({
        yes: data.result.agree.count,
        no: data.result.disagree.count
      });
    });

    ClientSocket.on("resultPole", data => {
      this.setState({
        onVote: data.result
      });
    });
  }

  render() {
    const BUTTONS = ["투표종료", "취소"];
    const CANCEL_INDEX = BUTTONS.length - 1;

    let attendence = {
      att: true,
      roomId: this.state.roomId,
      userId: this.state.userId,
      poleId: this.state.poleId,
      token: this.state.token
    };

    let expire = {
      poleId: this.state.poleId,
      roomId: this.state.roomId,
      token: this.state.token
    };

    if (this.state.clicked === "투표종료") {
      ClientSocket.emit("expirePole", { expire: expire });
      this.props.navi.navigation.goBack();
    }
    return (
      <Root>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <Text>약속시간</Text>
            <Text>{this.state.promiseTime}</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만날장소 (카카오맵)</Text>
          </Content>
          <Content style={styles.content}>
            <Text>투표 종료시간</Text>
            <Text>{this.state.expireTime}</Text>
          </Content>
          <Content style={styles.content}>
            <Text>전달내용</Text>
            <Text>{this.state.poleContent}</Text>
          </Content>
          <Content padder>
            <Button
              block
              style={
                this.state.userId === this.state.host && !this.state.poleResult
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
              <Text style={{ fontSize: 15 }}>투표종료</Text>
            </Button>
            {this.state.onVote === true ? (
              <Form style={styles.yesorno}>
                <Button
                  onPress={() => {
                    attendence.att = true;
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
                    attendence.att = false;
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
              <Form style={styles.anotherYesOrNo}>
                <View>
                  <Text style={{ fontSize: 15 }}>찬성 {this.state.yes}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>
                    {"           "}반대 {this.state.no}
                  </Text>
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
