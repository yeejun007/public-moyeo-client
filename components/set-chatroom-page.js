import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Footer, FooterTab, Text, Content, Form, Item, Input, Label, Picker} from 'native-base';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
  },
  header: {
    marginTop: 24
  },
  item: {
    bottom: 30
  },
  titletext: {
    fontSize: 25,
  },
  completechatroom: {
    marginTop : 30,
    left : 145
  }

});

class ChatroomSet extends Component {
  constructor(props){
    super(props)
    this.state = {
      setRoom:{

      },
      chatsubject: undefined,
      attendance: undefined,
      selected1: undefined,
      selected2: undefined
    }
    //console.log('뭐가올까요-->', this.props)
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
  
  onChangeText1(value) {
    this.setState({
      chatsubject: value
    });
  }

  onChangeText2(value) {
    this.setState({
      attendance: value
    });
  }

  // serverData = (보내는정보, callback) => {
  //   fetch(`http://localhost:3000/rooms/create}`, {
  //     method: 'POST',
  //     headers: {"x-access-token" : token},
  //     body: JSON.stringify(설정값정의해서 보내야함)
  //   }).then(response => {
  //     return response.json()
  //   }).then(json => {
  //     console.log(json)
  //     return callback(json)
  //   }).catch(err => console.log(err))
  // }; 패치가 안보내짐

createClicked = (event) => {
  //console.log('event--->', event)
  event.preventDefault();
  //severData(보내는정보, createRoom)
}

// createRoom(data) {
//   //스크롤 이벤트가 발생하면 다시 패치를 실행해서 더 받아와야함
//   this.setState({
//     setroom: data
//   })
// }


  render() {
    console.log('this.state--->', this.state)
    this.onChangeText1 = this.onChangeText1.bind(this);
    this.onChangeText2 = this.onChangeText2.bind(this);
    this.onValueChange1 = this.onValueChange1.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this)

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>뒤로가기</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Item style={styles.header}>
            <Body>
              <Text style={styles.titletext}>채팅방 설정</Text>
            </Body>
        </Item>
        <Form>
            <Item floatingLabel>
              <Icon active name='home' />
              <Label>채팅방 제목</Label>
              <Input onChangeText={this.onChangeText1}/>
            </Item>
            <Item floatingLabel last>
              <Icon active name='home' />
              <Label>채팅방 인원</Label>
              <Input onChangeText={this.onChangeText2}/>
            </Item>
            <Item picker>
            <Label>지역 설정</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1}
              >
               {this.region.map((val) => {
                return  <Picker.Item label={val} value={val} key={val}/>
              })}
              </Picker>
              <Label>카테고리</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2}
              >
               {this.category.map((val) => {
                return  <Picker.Item label={val} value={val} key={val}/>
              })}
              </Picker>
            </Item>
          </Form>
          <Button primary style={styles.completechatroom}
            onPress={() => this.props.navigation.navigate("Chattingroom", {})}
          >
            <Text>채팅방 설정 완료</Text>
          </Button>
        </Content>
        
        <Footer>
          <FooterTab>
            <Button full>
              <Text>(주)Moyeo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ChatroomSet;