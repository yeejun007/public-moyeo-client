import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content,
  Text,
  ActionSheet,
  Form,
  Footer,
  FooterTab,
  Root
} from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  button: {
    alignItems: "center"
  },
  yesorno: {
    flex: 1,
    flexDirection: "row",
    left: 5,
    top: 10
  },
  yes: {
    width: 150,
    marginRight: 10
  },
  no: {
    width: 150,
    marginRight: 10
  }
});

const BUTTONS = ["투표종료", "취소"];
const CANCEL_INDEX = BUTTONS.length - 1;

class SelectVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: ""
    };
  }

  render() {
    return (
      <Root>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <Text>약속시간</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만날장소 카카오맵</Text>
          </Content>
          <Content style={styles.content}>
            <Text>만료 날짜(날짜표기)</Text>
          </Content>
          <Content padder>
            <Button
              block
              style={styles.button}
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    title: "투표를 종료하시겠습니까?"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )
              }
            >
              <Text>투표종료</Text>
            </Button>
            <Form style={styles.yesorno}>
              <Button style={styles.yes}>
                <Icon name="md-thumbs-up" />
                <Text>찬성</Text>
              </Button>
              <Button style={styles.no}>
                <Icon name="md-thumbs-down" />
                <Text>반대</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

export default SelectVote;
