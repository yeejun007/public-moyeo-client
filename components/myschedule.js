import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  DatePicker,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  Form
} from "native-base";

export default class Myschedule extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      scheduleData: [],
      first: true,
      // userId: this.props.screenProps.rootState.userId
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  componentDidMount = () => {
    if(this.state.first) {
      this.fnfetch();
    }
  }
  
  fnfetch = () => {
    fetch(`http://koreanjson.com/users/schedules?${this.state.userId}`, {
      method: 'GET',
    // headers: {"x-access-token" : token}
    }).then(response => {
      return response.json()
    }).then(json => {
      if(json.success === true) {
        this.setState ({
          scheduleData: json.data,
          first : false,
        })
      } else {
        throw new Error({error: '내 채팅방 리스트 불러오기 실패 '})
      }
      // console.log(json)      
    }).catch(err => console.log(err))
  }



  render() {
    this.setDate = this.setDate.bind(this);
    return (
      <Container>
        <Content>
          <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="날짜를 선택하세요(클릭)"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>날짜: {this.state.chosenDate.toString().substr(4, 12)}</Text>
          
          <ScrollView style={styles.ScrollView}>
            {this.state.scheduleData.length === 0
            ? <Form></Form>
            : this.state.scheduleData.map((val) => {
              return <Text style={styles.Text} key={val.id}>모임:{val.schdduleTitle}  약속시간:{val.promiseTime}</Text> //여기 api 스펠링체크해야함
            })
            }
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
            <Button active vertical>
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
  }
})



