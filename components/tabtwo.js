import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SettingVote from  "./setting-vote-page";

export default class Tabtwo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
         <SettingVote />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
