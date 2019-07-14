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
      rooms: [
        {
          id: 1,
          roomTitle: '강남구방',
          roomSize: 10,
          region: '강남구',
          category: '운동',
          poleId: null,
          permissionId: null
        },
        {
          id: 2,
          roomTitle: '서초구방',
          roomSize: '10',
          region: '서초구',
          category: '영화관람',
          poleId: null,
          permissionId: null
        },
        {
          id: 3,
          roomTitle: '서초구방',
          roomSize: '10',
          region: '서초구',
          category: '영화관람',
          poleId: null,
          permissionId: null
        },
        {
          id: 4,
          roomTitle: '서초구방',
          roomSize: '10',
          region: '서초구',
          category: '영화관람',
          poleId: null,
          permissionId: null
        },
        {
          id: 5,
          roomTitle: '서초구방',
          roomSize: '10',
          region: '서초구',
          category: '영화관람',
          poleId: null,
          permissionId: null
        }
        ],
      serchValue: undefined,
      selected1: undefined,
      selected2: undefined,
      active: false,
    };
    this.region = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구','강북구', '도봉구', '노원구', '은평구', '서대문구', 
  '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']
    this.category = ['맛집탐방', '운동', '공연관람', '영화관람', '스터디모임']
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
      serchValue: value
    })
  }
 
//  serverData = (selected1,selected2,serchValue, callback) => {
//     fetch(`http://localhost:3000/list?region=${selected1}&category=${selected2}&limit=6&serch=${serchValue}`, {
//       method: 'GET',
//       headers: {"x-access-token" : token},
//     }).then(response => {
//       return response.json()
//     }).then(json => {
//       console.log(json)
//       return callback(json)
//     }).catch(err => console.log(err))
//   }; 패치가 안보내짐

serchClicked = (event) => {
  //console.log('event--->', event)
  event.preventDefault();
  //severData(this.state.serchValue, this.state.selected1,this.state.selected2,serchRooms)
}

// serchRoom(data) {
//   //스크롤 이벤트가 발생하면 다시 패치를 실행해서 더 받아와야함
//   this.setState({
//     rooms: data //연결되는 객체 형태로 props 바꿔줘야함
//   })
// }


  render() {
    console.log('this.stat-->', this.state)
    
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    this.onChangeValue =  this.onChangeValue.bind(this);
    
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="beer" />
            <Input placeholder="Search" ref={(input)=>{this.textInput = input}} 
            onChangeText={this.onChangeValue}/>
            <Button style={styles.button} onPress={this.serchClicked}>
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
              onValueChange={this.onValueChange1}
            >
              {this.region.map((val) => {
                return  <Picker.Item label={val} value={val} key={val}/>
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
              {this.category.map((val) => {
                return  <Picker.Item label={val} value={val} key={val}/>
              })}
            </Picker>
          </Form>
          <View style={styles.middleview}>
            <Searchchatroom navi={this.props.navigation} serchRoom={this.state.rooms}/>
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
              onPress={() => this.props.navigation.navigate("ChatroomSet", {})}
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
  }
});

