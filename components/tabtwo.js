import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SettingVote from "./setting-vote-page";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Tabtwo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SettingVote navi={this.props.navi} />
      </View>
    );
  }
}
