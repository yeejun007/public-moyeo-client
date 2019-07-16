import React, { Component } from "react";
import {
  Container,
  Button,
  Icon,
  Content,
  Text,
  ActionSheet,
  Form,
  Root
} from "native-base";
import { StyleSheet } from "react-native";

const SocketIoClient = require("socket.io-client");

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
  constructor() {
    super();
    this.state = {
      token: null,
      userId: 1,
      clicked: "",
      yes: 0,
      no: 0,
      yesOrno: null
    };

    this.socket = SocketIoClient("http://127.0.0.1:3002/", {
      transports: ["websocket"],
      forceNew: true,
      secure: true,
      timeout: 10000,
      jsonp: false,
      autoConnect: false,
      agent: "-",
      path: "/", // Whatever your path is
      pfx: "-",
      // key: token, // Using token-based auth.
      // passphrase: cookie, // Using cookie auth.
      cert: "-",
      ca: "-",
      ciphers: "-",
      rejectUnauthorized: "-",
      perMessageDeflate: "-"
    });
  }

  componentDidMount() {
    // this.setState({
    //   token: this.props.navi.screenProps.rootState.token
    // });
    this.setState({
      userId: this.props.navi.screenProps.rootState.userId
    });
  }

  render() {
    // console.log("============", this.props.navi);
    //this.props.navi.navigation.state.params.roomData.permissionId <--방장의 userId
    const host = this.props.navi.navigation.state.params.roomData.permissionId;
    const BUTTONS = ["투표종료", "취소"];
    const CANCEL_INDEX = BUTTONS.length - 1;

    const attendence = {
      att: this.state.yesOrno
    };
    this.socket.emit("attendencePole", { attendence });
    this.socket.on("returnAttendence", data => {
      this.setState({
        yes: data.result.agree.count,
        no: data.result.disagree.count
      });
    });

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
            <Text>만날장소 카카오맵</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만료 날짜(날짜표기)</Text>
          </Content>
          <Content padder>
            <Button
              block
              style={
                this.state.userId === host ? styles.button : styles.buttonHide
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
            <Form style={styles.yesorno}>
              <Button
                onPress={() => {
                  this.setState({
                    yes: this.state.yes + 1,
                    yesOrno: true
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
                    no: this.state.no + 1,
                    yesOrno: false
                  });
                }}
                style={styles.no}
              >
                <Icon name="md-thumbs-down" />
                <Text>반대 {"       " + this.state.no}</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

export default SelectVote;
