import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { AppLoading } from "expo";
import Startuppage from "./components/startuppage";
import AppContainer from "./navigation/Navigation";
import Signup from "./components/signup";
import ClientSocket from "./socket/clientsocket";
console.ignoredYellowBox = ["Remote debugger"];
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
]);

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      isLogin: false,
      clickSignup: false,
      loading: true,
      userId: null,
      nickname: null,
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

  LoginSuccess(token) {
    this.setState({ isLogin: true, token: token });
  }

  changeVoteState() {
    this.setState({
      onVote: true
    });
  }

  clickSignup() {
    this.setState({ clickSignup: true });
  }

  passInfo(userId, nickname) {
    this.setState({
      userId: userId,
      nickname: nickname
    });
  }

  render() {
    this.clickSignup = this.clickSignup.bind(this);
    this.gobackMain = this.gobackMain.bind(this);
    this.LogOut = this.LogOut.bind(this);
    this.changeVoteState = this.changeVoteState.bind(this);
    this.LoginSuccess = this.LoginSuccess.bind(this);
    this.passInfo = this.passInfo.bind(this);

    if (this.state.loading) {
      return <AppLoading />;
    }
    if (this.state.isLogin === false && this.state.clickSignup === false) {
      return (
        <Startuppage
          isLogin={this.state.isLogin}
          userId={this.state.userId}
          nickname={this.state.nickname}
          clickSignup={this.clickSignup}
          gobackMain={this.gobackMain}
          LoginSuccess={this.LoginSuccess}
          passInfo={this.passInfo}
        />
      );
    }
    if (this.state.clickSignup) {
      return <Signup gobackMain={this.gobackMain} />;
    }
    return (
      <AppContainer
        screenProps={{
          rootState: this.state,
          LogOut: this.LogOut,
          changeVoteState: this.changeVoteState
        }}
      />
    );
  }
}

export default App;
