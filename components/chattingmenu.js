import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Text,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  Button
} from "native-base";
import Tab1 from "./tabone";
import Tab2 from "./tabtwo";
import Tab3 from "./tabthree";

const styles = StyleSheet.create({
  closebutton: {
    top: 10,
    right: 120
  },
  content: {
    marginTop: 10
  },
  header: {
    height: 80
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default class Chattingmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("========= chatting menu", this.props);
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => {
                return this.props.navigation.goBack();
              }}
              transparent
              style={styles.closebutton}
            >
              <Icon name="close" />
            </Button>
          </Left>
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>참가자</Text>
              </TabHeading>
            }
          >
            <Tab1 navi={this.props} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>투표생성</Text>
              </TabHeading>
            }
          >
            <Tab2 navi={this.props} />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>투표확인</Text>
              </TabHeading>
            }
          >
            <Tab3 navi={this.props} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
