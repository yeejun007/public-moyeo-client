import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import Startuppage from "./components/startuppage";
import AppContainer from "./navigation/Navigation";
import Signup from "./components/signup";
const fetch = require("node-fetch");

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      loading: true,
      isLogin: false
    };
    this.checkUser = this.checkUser.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  checkUser() {
    fetch("http://52.78.213.9:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.state.token
      }
    }).bind(this);
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    if (!this.state.isLogin) {
      return <Startuppage />;
    }

    return <AppContainer />;
  }
}

export default App;
