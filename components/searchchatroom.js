import React, { Component } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Button } from "native-base";



//import { ScrollView } from "react-native-gesture-handler";


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
     console.log('this1--->', this)
  }

render() {
  //console.log('----')
  return (
    <ScrollView style={styles.Container}>
      {this.props.searchRoom.length === 0 ? <Text style={styles.Text}>검색결과 없음</Text> : this.props.searchRoom.map((val) => {
        //console.log('val--->', val)
        let roomData = val;
        //console.log('this.props.navi.navigate--->', this.props.navi)
        return  <Text style={styles.Text} onPress={() => this.props.navi.navigate("Chattingroom", {roomData: roomData})} key={val.id} rData={val}>{val.roomTitle}</Text>
      })}  
    </ScrollView>
    );
  }
}

