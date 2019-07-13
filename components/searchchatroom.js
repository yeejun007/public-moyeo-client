import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class Searchchatroom extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Text onPress={() => this.props.navi.navigate("Chattingroom")}>
        클릭하면 채팅방으로 이동합니다
      </Text>
    );
  }
}
