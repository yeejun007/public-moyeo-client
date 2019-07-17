import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
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
  Body,
  View
} from "native-base";


export default class Mychatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
      ],
      roomCount: undefined,
      keyword: undefined,
      first: true,
      // userId: this.props.screenProps.rootState.userId
    };
  }

  // componentDidMount = () => {
  //   fetch(`http://localhost:3000/users/list?{userId}`, {
  //     method: 'GET',
  //     headers: {"x-access-token" : token},
  //   }).then(response => {
  //     return response.json()
  //   }).then(json => {
  //     //console.log(json)
  //     this.setState({data})      
  //   }).catch(err => console.log(err))
  // }
  
  componentDidMount = () => {
    // fetch(`http://koreanjson.com/users`, {
    //   method: 'GET',
    // //  headers: {"x-access-token" : token},
    // }).then(response => {
    //   return response.json()
    // }).then(json => {
    //   //console.log(json)
    //   this.setState ({
    //     rooms: json
    //   })      
    // }).catch(err => console.log(err))
    if(this.state.first) {
      this.fnfetch();
    }
  }

  fnfetch = () => {
    fetch(`http://koreanjson.com/users/list?${this.state.userId}`, {
      method: 'GET',
    // headers: {"x-access-token" : token}
    }).then(response => {
      return response.json()
    }).then(json => {
      if(json.success === true) {
        this.setState ({
          rooms: json.data,
          roomCount: json.data.length,
          first : false,
        })
      } else {
        throw new Error({error: '내 채팅방 리스트 불러오기 실패 '})
      }
      // console.log(json)      
    }).catch(err => console.log(err))
  }

  onChangeValue = (value) => {
    this.setState({
      keyword: value,
    })
  }

  searchView = () => {
    // if(this.state.keyword) {
    //   let searchArr = rooms.filter((val) => {
    //     return val.roomTitle.indexOf(this.state.keyword) > -1
    //   });
    //   this.setState({
    //     rooms: searchArr,
    //   })
    // }
    if(this.state.keyword) {
      console.log('----->')
      let searchArr = this.state.rooms.filter((val) => {
        return val.roomTitle.indexOf(this.state.keyword) > -1
      });
      this.setState({
        rooms: searchArr,
      })
    } else {
      this.fnfetch();
    }
  }

      

  render() {
    // console.log('this.state----->', this.state)
    
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="contacts" />
            <Input placeholder="Search" onChangeText={this.onChangeValue} />
            <Button style={styles.button} transparent onPress={this.searchView}>
              <Icon name="ios-search" />
            </Button>
          </Item>
        </Header>
        <Content style={styles.content}>
          
          <ScrollView style={styles.ScrollView}>
          {this.state.rooms.length === 0 
          ? <Form></Form> 
          : this.state.rooms.map((val) => {
            return <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.roomTitle}</Text>
            })}
          </ScrollView>

        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate("Home", {roomCount: this.state.roomCount})} // 이거 쓸수 있는 지 확인해봐야함
              vertical
            >
              <Icon name="home" />
              <Text>메인</Text>
            </Button>
            <Button vertical badge>
              <Badge>
                <Text>{this.state.roomCount}</Text>
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
  ScrollView: {
    width: 400,
    borderColor: 'black',
    borderWidth: 1
  },
  Text: {
    fontSize: 30,
    color: 'blue',
    borderColor: 'black',
    borderWidth: 1
  },
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

// {this.state.searchMyRoom.length > 0 
//   ? this.state.searchMyRoom.map((val) => {
//     return <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.city}</Text> 
//     })
//   : this.state.rooms.length === 0 
//   ? <Form></Form> 
//   : this.state.rooms.map((val) => {
//     return <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.city}</Text>
//     })}         