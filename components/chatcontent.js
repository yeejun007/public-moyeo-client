import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Form, Item, Icon } from "native-base";

const styles = StyleSheet.create({
  uppercontent: {
    flexDirection: "row",
    marginBottom: 10
  },
  goright: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10
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
          this.props.userId === this.props.userIdS
            ? styles.goright
            : styles.uppercontent
        }
      >
        {this.props.userId === this.props.userIdS ? (
          <></>
        ) : (
          <Icon name="person" />
        )}
        <View>
          <Text>{this.props.nickname}</Text>
          <Text>{this.props.message}</Text>
          <Text>{this.props.createdAt}</Text>
        </View>
      </Form>
    );
  }
}
