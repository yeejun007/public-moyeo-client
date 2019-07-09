import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>서치바 구현</Text>
        <Search data={12344556666} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
