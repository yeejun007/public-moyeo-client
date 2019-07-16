import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, Left, Right, Text, Body, Icon } from "native-base";

const styles = StyleSheet.create({});

export default class participants extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListItem avatar>
        <Left>
          <Icon name="person" />
          {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
        </Left>
        <Body>
          <Text>송이준</Text>
          <Text />
        </Body>
        <Right />
      </ListItem>
    );
  }
}
