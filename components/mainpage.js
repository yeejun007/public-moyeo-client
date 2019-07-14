import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Badge,
  Picker,
  Fab,
  View
} from "native-base";
import Searchchatroom from "./searchchatroom";

export default class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      selected1: undefined,
      selected2: undefined,
      active: false
    };
  }

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    console.log(this.props.navigation.state);

    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="beer" />
            <Input placeholder="Search" />
            <Button style={styles.button} transparent>
              <Icon name="ios-search" />
            </Button>
          </Item>
        </Header>
        <Content style={styles.content}>
          <Form style={styles.pickerform}>
            <Picker
              mode="dropdown"
              placeholder="지역을 선택하세요"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.regionpicker}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="서울" value="key0" />
              <Picker.Item label="부산" value="key1" />
              <Picker.Item label="대구" value="key2" />
              <Picker.Item label="광주" value="key3" />
              <Picker.Item label="울산" value="key4" />
              <Picker.Item label="대전" value="key4" />
            </Picker>
            <Picker
              mode="dropdown"
              placeholder="카테고리를 선택하세요"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.categorypicker}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="맛집탐방" value="key0" />
              <Picker.Item label="운동" value="key1" />
              <Picker.Item label="공연관람" value="key2" />
              <Picker.Item label="영화관람" value="key3" />
              <Picker.Item label="코딩" value="key4" />
            </Picker>
          </Form>
          <View style={styles.middleview}>
            <Searchchatroom navi={this.props.navigation} />
          </View>
        </Content>
        <View>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="menu" />
            <Button
              onPress={() => this.props.navigation.navigate("ChatroomSet")}
              style={{ backgroundColor: "#34A34F" }}
            >
              <Icon name="add" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <Icon name="chatboxes" />
            </Button>
            <Button disabled style={{ backgroundColor: "#DD5144" }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>메인</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("Mychatting")}
              vertical
              badge
            >
              <Badge>
                <Text>7</Text>
              </Badge>
              <Icon name="beer" />
              <Text>내 모임</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("Myschedule")}
              active
              vertical
            >
              <Icon active name="calendar" />
              <Text>내 일정</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate("ProfileSetting")}
              vertical
            >
              <Icon name="person" />
              <Text>내 정보</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50
  },
  middleview: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    top: 25
  },
  button: {
    left: 0,
    top: -3
  },
  pickerform: {
    flexDirection: "row",
    top: -15
  },
  regionpicker: {
    width: 200
  },
  categorypicker: {
    width: 220
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
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
