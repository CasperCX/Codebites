import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { ScrollView, Text, View, FlatList, Button } from 'react-native';

import TopicTitle from './TopicTitle';

export default class Languages extends Component {
  state = {
    data: []
  }

  async componentWillMount() {
    try {
      //Generate new ngrok link on every restart using: ngrok http 5000 + /languages
      let res = await axios.get('http://9d96c7d1.ngrok.io/languages');
      this.setState({ data: res.data });
      } catch (error) {
        console.error(error);
    }
  }

  renderItem({item}) {
    return  (
      <View>
          <TopicTitle key={item.model} topic={item}>{item.model} - {item.doors}</TopicTitle>
      </View>
    )
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}





// const dataSource = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2,
// });

// const mapStateToProps = state => {
//   return {
//       dataSource: dataSource.cloneWithRows(this.state.test)
//   }
// };


// export default connect(mapStateToProps, {})(Languages);