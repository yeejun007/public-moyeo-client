import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Chattingmenu from "../components/chattingmenu";
import Chattingroom from "../components/chattingroom";
import Mainpage from "../components/mainpage";
import ProfileSetting from "../components/profilesetting";
import SelectVote from "../components/select-vote-page";
import ChatroomSet from "../components/set-chatroom-page";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Mainpage
  },
  ChatroomSet: {
    screen: ChatroomSet
  },
  Chattingroom: {
    screen: Chattingroom
  },
  ProfileSetting: {
    screen: ProfileSetting
  },
  Chattingmenu: {
    screen: Chattingmenu
  },
  SelectVote: {
    screen: SelectVote
  }
});

export default createAppContainer(AppNavigator);
