import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import Startuppage from "./components/startuppage";
import AppContainer from "./navigation/Navigation";
import Signup from "./components/signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      isLogin: false,
      clickSignup: false,
      loading: true,
      nickname: "송이준",
      userId: 1,
      onVote: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  gobackMain() {
    this.setState({ clickSignup: false });
  }

  LogOut() {
    this.setState({ isLogin: false, token: null });
  }

  checkUser() {
    this.setState({ isLogin: true });
    // fetch("   ", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-access-token": this.state.token
    //   }
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(result => {
    //     this.state.isLogin = result.isLogin;
    //     if (this.state.token) {
    //       this.state.token = result.token;
    //     }
    //   });
  }

  clickSignup() {
    this.setState({ clickSignup: true });
  }

  render() {
    this.checkUser = this.checkUser.bind(this);
    this.clickSignup = this.clickSignup.bind(this);
    this.gobackMain = this.gobackMain.bind(this);
    this.LogOut = this.LogOut.bind(this);

    if (this.state.loading) {
      return <AppLoading />;
    }
    if (this.state.isLogin === false && this.state.clickSignup === false) {
      return (
        <Startuppage
          clickSignup={this.clickSignup}
          checkUser={this.checkUser}
        />
      );
    }
    if (this.state.clickSignup) {
      return <Signup gobackMain={this.gobackMain} />;
    }
    return (
      <AppContainer
        screenProps={{ rootState: this.state, LogOut: this.LogOut }}
      />
    );
  }
}

export default App;
