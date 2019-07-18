import React, { Component } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import ClientSocket from "../socket/clientsocket";

const styles = StyleSheet.create({
  Container: {
    width: 400,
    borderColor: "black",
    borderWidth: 1
  },
  Text: {
    fontSize: 30,
    color: "blue",
    borderColor: "black",
    borderWidth: 1
  }
});
export default class Searchchatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.Container}>
        {this.props.searchRoom.length === 0 ? (
          <Text style={styles.Text}>검색결과 없음</Text>
        ) : (
          this.props.searchRoom.map(val => {
            let roomData = val;

            return (
              <Text
                style={styles.Text}
                onPress={() => {
                  ClientSocket.emit("ServerEntryRoom", {
                    data: {
                      roomId: roomData.id,
                      userId: this.props.navi.screenProps.rootState.userId,
                      nickname: this.props.navi.screenProps.rootState.nickname,
                      token: this.props.navi.screenProps.rootState.token
                    }
                  });
                  this.props.navi.navigation.navigate("Chattingroom", {
                    roomData: roomData
                  });
                }}
                key={val.id}
              >
                {val.roomTitle}
              </Text>
            );
          })
        )}
      </ScrollView>
    );
  }
}
