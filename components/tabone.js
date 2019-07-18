import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Content, List } from "native-base";
import Participants from "./participants";
import ClientSocket from "../socket/clientsocket";

export default class Tabone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreePeople: [
        {
          id: null,
          poleId: null,
          userId: null,
          attendence: null
        }
      ],
      disagreePeople: [
        {
          id: null,
          poleId: null,
          userId: null,
          attendence: null
        }
      ]
    };

    // ClientSocket.on("returnAttendence", data => {
    //   this.setState({
    //     agreePeople: data.result.agree.rows,
    //     disagreePeople: data.result.disagree.rows
    //   });
    // });
  }

  render() {
    return (
      <Content style={styles.content}>
        <List>
          <Participants />
        </List>
        <List></List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10
  }
});
