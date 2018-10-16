import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class TutorialDetail extends Component {
  render() {
    const { title, body, createdAt } = this.props.tutorial;
    return (
      <View>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{createdAt}</Text>
        </View>
        <View style={styles.tutorial}>
          <Text style={styles.tutorial}>{body}</Text>
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'montserrat-semibold',
    fontSize: 20,
    color: '#000000'
  },
  tutorial: {
    padding: 8, 
  }
});
