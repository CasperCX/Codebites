import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import { Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

export default class TopicTitle extends Component {

onPress() {
    console.log("pressed on new topic:", this.props.topic);
   
}

render() {
return (
    <TouchableNativeFeedback onPress={() => Actions.topicview({ topic: this.props.topic }) }>
        <Text style={styles.title}>{this.props.children}</Text>
    </TouchableNativeFeedback>
    )
  }
}


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
