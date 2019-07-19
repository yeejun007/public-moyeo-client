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
    top: 24
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
  },
  plus: {
    marginBottom: 22,
    borderRadius: 400,
    left: 10,
    backgroundColor: "#5067FF"
  }
});

export default class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      token: this.props.screenProps.rootState.token,
      searchValue: undefined,
      selected1: undefined,
      selected2: undefined,
      active: false,
      presentValue: undefined
    };
    this.region = [
      "::지역::",
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구"
    ];
    this.category = [
      "::카테고리::",
      "맛집탐방",
      "운동",
      "공연관람",
      "영화관람",
      "스터디모임"
    ];
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

  onChangeValue(value) {
    this.setState({
      searchValue: value
    });
  }

  searchClicked = event => {
    this.setState({
      presentValue: this.state.searchValue
    });
    this.lastRoomId = undefined;
    this.serverData(
      this.state.selected1,
      this.state.selected2,
      this.state.searchValue,
      this.lastRoomId,
      this.searchRooms,
      true
    );
  };

  serverData = (
    selected1,
    selected2,
    searchValue,
    lastRoomId,
    callback,
    search
  ) => {
    fetch(
      `http://13.209.76.220:3000/rooms?region=${selected1}&category=${selected2}&limit=5&roomTitle=${searchValue}&roomId=${lastRoomId}`,
      {
        method: "GET"
        // headers: {"x-access-token" : this.state.token},
      }
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.success === true) {
          if (search) {
            callback(json.data);
          }
          callback(json.data);
        } else {
          throw new Error({ error: "룸 리스트 불러오기 실패 " });
        }
      })
      .catch(err => console.log(err));
  };

  searchRooms = result => {
    this.setState({
      rooms: result
    });
  };

  plusSearchClick = event => {
    let lastRoomId = undefined;
    if (this.state.rooms.length !== 0) {
      this.lastRoomId = this.state.rooms[this.state.rooms.length - 1].id;
      this.serverData(
        this.state.selected1,
        this.state.selected2,
        this.state.presentValue,
        this.lastRoomId,
        this.plusRooms
      );
      //
    }
  };

  plusRooms = result => {
    if (this.state.rooms.length !== 0) {
      let newdata = Array.from(this.state.rooms);
      newdata = newdata.concat(result);
      this.setState({
        rooms: newdata
      });
    }
  };

  render() {
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);

    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="beer" />
            <Input
              placeholder="Search"
              ref={input => {
                this.textInput = input;
              }}
              onChangeText={this.onChangeValue}
            />
            <Button style={styles.button} onPress={this.searchClicked}>
              <Icon name="ios-search" />
            </Button>
          </Item>
        </Header>
        <View style={styles.content}>
          <Form style={styles.pickerform}>
            <Picker
              mode="dropdown"
              placeholder="지역을 선택하세요"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.regionpicker}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange1}
            >
              {this.region.map(val => {
                return <Picker.Item label={val} value={val} key={val} />;
              })}
            </Picker>
            <Picker
              mode="dropdown"
              placeholder="카테고리를 선택하세요"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.categorypicker}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2}
            >
              {this.category.map(val => {
                return <Picker.Item label={val} value={val} key={val} />;
              })}
            </Picker>
          </Form>
        </View>
        <Content>
          <View style={styles.middleview}>
            <Searchchatroom navi={this.props} searchRoom={this.state.rooms} />
          </View>
        </Content>
        <Button vertical style={styles.plus} onPress={this.plusSearchClick}>
          <Icon name="md-download" />
          <Text>더보기</Text>
        </Button>
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
              onPress={() =>
                this.props.navigation.navigate("ChatroomSet", {
                  region: this.region,
                  category: this.category
                })
              }
              style={{ backgroundColor: "#34A34F" }}
              screenprops={this.state}
              category={this.category}
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
