import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectVote from "./select-vote-page";

export default class Tabthree extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SelectVote />
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
