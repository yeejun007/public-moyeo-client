import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Container } from "native-base";


const styles = StyleSheet.create({
  Container: {
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
export default class Searchchatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    console.log(this.props.serchRoom.length)
    return (
      <Container style={styles.Container}>
      {this.props.serchRoom.length === 0 ? <Text style={styles.Text}>검색결과 없음</Text> : this.props.serchRoom.map((val) => {
        return  <Text style={styles.Text} onPress={() => this.props.navi.navigate("Chattingroom")} key={val.id}>{val.roomTitle}</Text>
      })}  
      </Container>
    );
  }
}




