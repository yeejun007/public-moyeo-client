import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Form } from "native-base";

const styles = StyleSheet.create({
  uppercontent: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  content: {},
  nickname: {},
  message: {},
  createdAt: {}
});

export default class Chatcontent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Form
        style={
          this.props.nickname === this.props.userNickname
            ? styles.uppercontent
            : {}
        }
      >
        <View>
          <Text>{this.props.nickname}</Text>
          <Text>{this.props.message}</Text>
          <Text>{this.props.createdAt}</Text>
        </View>
      </Form>
    );
  }
}
