import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SelectVote from "./select-vote-page";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Tabthree extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SelectVote navi={this.props.navi} />
      </View>
    );
  }
}
