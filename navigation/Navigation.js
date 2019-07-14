import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Chattingmenu from "../components/chattingmenu";
import Chattingroom from "../components/chattingroom";
import Mainpage from "../components/mainpage";
import ProfileSetting from "../components/profilesetting";
import SelectVote from "../components/select-vote-page";
import ChatroomSet from "../components/set-chatroom-page";
import Mychatting from "../components/mychatting";
import Myschedule from "../components/myschedule";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Mainpage,
    navigationOptions: () => ({
      header: null
    })
  },
  ChatroomSet: {
    screen: ChatroomSet,
    navigationOptions: () => ({
      header: null
    })
  },
  Chattingroom: {
    screen: Chattingroom,
    navigationOptions: () => ({
      header: null
    })
  },
  ProfileSetting: {
    screen: ProfileSetting,
    navigationOptions: () => ({
      header: null
    })
  },
  Chattingmenu: {
    screen: Chattingmenu,
    navigationOptions: () => ({
      header: null
    })
  },
  SelectVote: {
    screen: SelectVote,
    navigationOptions: () => ({
      header: null
    })
  },
  Mychatting: {
    screen: Mychatting,
    navigationOptions: () => ({
      header: null
    })
  },
  Myschedule: {
    screen: Myschedule,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default createAppContainer(AppNavigator);
