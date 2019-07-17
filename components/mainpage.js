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
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
    
      ],
      //token: this.props.screenProps.rootstate.isLogin,
      searchValue: undefined,
      selected1: undefined,
      selected2: undefined,
      active: false,
    };
    this.region = ['::지역::','종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구','강북구', '도봉구', '노원구', '은평구', '서대문구', 
  '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']
    this.category = ['::카테고리::','맛집탐방', '운동', '공연관람', '영화관람', '스터디모임']
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
    })
  }
 
  serverData = (selected1,selected2,searchValue,lastRoomId, callback) => {
    // const limit = 7
    console.log(typeof lastRoomId, lastRoomId)
    fetch(`http://13.209.76.220:3000/rooms?region=${selected1}&category=${selected2}&limit=7&roomTitle=${searchValue}&roomId=${lastRoomId}`,{

      method: 'GET',
   // headers: {"x-access-token" : this.state.token},
    }).then(response => {
      return response.json()
    }).then(json => {
      console.log('json-------->', json)
      if(json.success === true) {
        callback(json.data)
      } else {
        throw new Error({error: '룸 리스트 불러오기 실패 '})
      }
    }).catch(err => console.log(err))
  };
  
// serverData = (callback) => {
//   fetch(`http://koreanjson.com/users`, {
//     method: 'GET',
//     // headers: {"x-access-token" : token},
//     }).then(response => {
//       return response.json()
//     }).then(json => {
//       //console.log('json---->', json)
//       callback(json)
//     }).catch(err => console.log(err))
//   }; koreajson


searchRooms = (result) => {
    if(result.length === 0) {
      this.setState({
        rooms: result
      })
    }
    if(this.state.rooms.length !== 0 && this.state.rooms[this.state.rooms.length-1].id !== result[result.length-1].id) {
      let newdata = Array.from(this.state.rooms)
      newdata = newdata.concat(result)
      this.setState({
        rooms: newdata
      })
    } else {
      this.setState({
        rooms: result
      })
    }
  }




searchClicked = (event) => {
  // console.log('event-->', event)
  // console.log('lastroomId---->', this.lastRoomId) //마지막 방번호 보내기
  event.preventDefault();
  let lastRoomId = undefined;
  this.serverData(this.state.selected1,this.state.selected2,this.state.searchValue,this.lastRoomId,this.searchRooms)
  // this.serverData(this.searchRooms)
}

plusSearchClick = (event) => {
  event.preventDefault();
  let lastRoomId = undefined;
  if(this.state.rooms.length !== 0) {
    this.lastRoomId = this.state.rooms[this.state.rooms.length-1].id
    // console.log('this.lastRoomId---->', this.lastRoomId)
  }
  // console.log('this.lastRoomId---->', this.lastRoomId)
  this.serverData(this.state.selected1,this.state.selected2,this.state.searchValue,this.lastRoomId,this.searchRooms)
}




  render() {
    
    // console.log('this.state-->', this.state)
    
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
            <Button style={styles.button} onPress={this.searchClicked} >
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
          </View>
          <Content>
        <View style={styles.middleview}>
            <Searchchatroom navi={this.props.navigation} searchRoom={this.state.rooms} />
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
              onPress={() => this.props.navigation.navigate("ChatroomSet", {region: this.region, category: this.category})}
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
  },
  plus: {
    marginBottom: 22,
    borderRadius: 400,
    left: 10,
    backgroundColor: "#5067FF",
    // padding: 5,
    // height: 200,
    // width: 200,
    // borderRadius:400 원만드는 방법 하지만 글씨 잘림
  }
});

