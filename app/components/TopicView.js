import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, FlatList } from 'react-native';

export default class TopicView extends Component {
  state = {
    tutorials: []
  }

  async componentDidMount() {
    try {
      //Generate new ngrok link on every restart using: ngrok http 5000 + /languages
      let res = await axios.get('http://7e7513a7.ngrok.io/javascript'); //API endpoint for testing!
      this.setState({ tutorials: res.data.tutorials });
      } catch (error) {
        console.error(error);
    }
  }


renderItem({item}) {
  return  (
    <View>
        <Text key={item.title}>{item.title}</Text>
    </View>
  )
}

render() {
  const { title } = this.props.topic;
  return (
    <View>
      <Text>Topic view for {title}</Text>
      <FlatList
        data={this.state.tutorials}
        renderItem={this.renderItem}
      />
    </View>
    )
  }
}



