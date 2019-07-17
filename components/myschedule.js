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
  Badge
} from "native-base";

export default class Myschedule extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      scheduleData: null,
    };
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  // componentDidMount = () => {
  //   // fetch(`http://koreanjson.com/users`, {
  //   //   method: 'GET',
  //   // //  headers: {"x-access-token" : token},
  //   // }).then(response => {
  //   //   return response.json()
  //   // }).then(json => {
  //   //   //console.log(json)
  //   //   this.setState ({
  //   //     rooms: json
  //   //   })      
  //   // }).catch(err => console.log(err))
  //   if(this.state.first) {
  //     this.fnfetch();
  //   }
  // }
  
  // fnfetch = () => {
  //   fetch(`http://localhost:3000/schedules?userId={Number}`, {
  //     method: 'GET',
  //   //  headers: {"x-access-token" : token},
  //   }).then(response => {
  //     return response.json()
  //   }).then(json => {
  //     this.setState ({
  //       scheduleData: json.data
  //     })
           
  //   }).catch(err => console.log(err))
  // }



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



