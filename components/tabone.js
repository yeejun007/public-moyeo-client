import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Text,
  Body,
  Icon
} from "native-base";

export default class Tabone extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Content style={styles.content}>
        <List>
          <ListItem avatar>
            <Left>
              <Icon name="person" />
              {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
            </Left>
            <Body>
              <Text>송이준</Text>
              <Text note>레이아웃 페이지 넘많다..</Text>
            </Body>
            <Right>
              <Text note>11:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Icon name="person" />
              {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
            </Left>
            <Body>
              <Text>민태홍</Text>
              <Text note>레이아웃 페이지 넘많다..</Text>
            </Body>
            <Right>
              <Text note>11:55 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10
  },
  header: {
    height: 80
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
