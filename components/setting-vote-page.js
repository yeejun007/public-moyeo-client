import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content,
  Text,
  Form,
  Root,
  Item,
  Label,
  Input,
 
} from "native-base";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    height: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d6d7da"
  },
  button: {
    alignItems: "center"
  },
  yesorno: {
    flex: 1,
    flexDirection: "row",
    left: 5,
  },
  yes: {
    width: 150,
    marginRight: 10
  },
  no: {
    width: 150,
    marginRight: 10
  },
  contentmap: {
    borderRadius: 5,
    borderWidth: 1,
  }
});

class SettingVote extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Container style={styles.container}>
          
          <Content style={styles.content}>
          <Form>
            <Item floatingLabel>
              <Label>투표제목</Label>
              <Input />
            </Item>
          </Form>
          <Form>
            <Item floatingLabel>
              <Label>약속시간(월MM,일DD,시HH,분MM)</Label>
              <Input />
            </Item>
          </Form>
          <Form>
          <Item floatingLabel>
              <Label>장소, 방장전달사항 입력</Label>
              <Input />
            </Item>
          </Form>
          <Content style={styles.contentmap}>
            <Text>만날장소 카카오맵</Text>
          </Content>  
          <Form style={styles.yesorno}>
              <Button style={styles.yes}>
                <Icon name="md-thumbs-up" />
                <Text>확인</Text>
              </Button>
              <Button style={styles.no}>
                <Icon name="md-thumbs-down" />
                <Text>취소</Text>
              </Button>
           </Form>
          </Content>
     </Container>
    );
  }
}

export default SettingVote;