// 채팅방에 참가한 사람들의 목록은 아직 서버데이터 준비중임. ( 보 류 )

import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
