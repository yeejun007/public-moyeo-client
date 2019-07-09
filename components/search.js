import React from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

class Search extends React.Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default Search;
