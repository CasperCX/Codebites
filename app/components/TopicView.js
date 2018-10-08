import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TopicView extends Component {
  render() {
  
    return (
      <View>
        <Text>Topic view for {this.props.topic.model}</Text>
      </View>
    )
  }
}
