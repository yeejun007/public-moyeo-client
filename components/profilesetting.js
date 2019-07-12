import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Footer,
  FooterTab,
  Button,
  Text,
  Picker,
  Icon
} from "native-base";

export default class ProfileSetting extends Component {
  constructor() {
    super();
    this.state = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    this.onValueChange = this.onValueChange.bind(this);

    return (
      <Container>
        <Content style={styles.content}>
          <Form>
            <Item inlineLabel>
              <Label>아이디 (e-mail)</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>비밀번호</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>닉네임</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>나이</Label>
              <Input />
            </Item>
            <Item picker style={styles.pickerItem}>
              <Picker
                mode="dropdown"
                placeholder="성별"
                iosIcon={<Icon name="arrow-down" />}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="남자" value="key0" />
                <Picker.Item label="여자" value="key1" />
              </Picker>
            </Item>
          </Form>
          <Button block style={styles.button}>
            <Text>회원가입</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text style={styles.footerText}>(주)Moyeo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    top: 100,
    height: 500
  },
  ageItem: {
    width: 100
  },
  button: {
    left: 15,
    width: 380
  },
  pickerItem: {
    left: 215,
    width: 200
  },
  TitleText: {
    left: 120,
    fontSize: 50,
    color: "green"
  },
  footerText: {
    fontSize: 15
  },
  cardItem: {
    left: 120
  },
  genderText: {
    top: 10,
    color: "grey",
    left: 15,
    fontSize: 17
  },
  container: {
    top: 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
