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
  Body,
  View
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Mychatting extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [

      ],
      keyword: '',
      searchValue: null,
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
    fetch(`http://koreanjson.com/users`, {
      method: 'GET',
    //  headers: {"x-access-token" : token},
    }).then(response => {
      return response.json()
    }).then(json => {
      //console.log(json)
      this.setState ({
        rooms: json
      })      
    }).catch(err => console.log(err))
  }

  onChangeValue = (value) => {
    this.setState({
      keyword: value
    })
  }

  // searchView = (rooms) => {
  //   let searchArr = rooms.filter((val) => {
  //       return val.roomTitle.indexOf(this.state.keyword) > -1
  //     });
  //     return searchArr.map((data) => {
  //       return  <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.city}</Text>
  //     })
  //     if(this.state.rooms.length === 0) {
  //       return <Text>참여 중인 채팅방이 없습니다</Text>
  //     } else {
  //     this.state.rooms.map((val) => {
  //       return <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.city}</Text>
  //     })
  //   } 
  
  
  

  render() {
    console.log('this.state----->', this.state)

    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="contacts" />
            <Input placeholder="Search" ref={(input)=>{this.textInput = input}} onChangeText={this.onChangeValue} />
            <Button style={styles.button} transparent >
              <Icon name="ios-search" />
            </Button>
          </Item>
        </Header>
        <Content style={styles.content}>
          <ScrollView style={styles.ScrollView}>
            {this.state.rooms.length === 0 ? <Form></Form> : this.state.rooms.map((val) => {
              return <Text style={styles.Text} onPress={()=>this.props.navigation.navigate("Chattingroom",{roomData: val})} key={val.id}>{val.city}</Text>
            })}
          </ScrollView>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate("Home")}
              vertical
            >
              <Icon name="home" />
              <Text>메인</Text>
            </Button>
            <Button vertical badge>
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
