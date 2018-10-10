import React, { Component } from 'react'
import { Font } from 'expo';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import SubTopicTitle from './SubTopicTitle';

export default class TutorialView extends Component {
state = {
    data: []
}

  async componentDidMount() {
    this.loadFonts();
    try {
      //Generate new ngrok link and replace proxy in package.json every restart using: ngrok http 5000
      let res = await axios.get('http://8c854b92.ngrok.io/javascript/authentication'); //API endpoint for testing!
      this.setState({ data: res.data });
      } catch (error) {
        console.error(error);
    }
  }
 
  async loadFonts(){
    try {
      await Font.loadAsync({
        'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
        'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      });
    }
    catch(e) {
      Log.error(e);
    }
    finally {
      this.setState({fontLoaded: true});
    }
}

renderItem({item}) {
  return  (
    <View>
        <Text key={item.tutid}>{item.title}</Text>
    </View>
    //<SubTopicTitle key={item.title}>{item.tutid}{item.title}</SubTopicTitle>
  )
}

render() {
  const { title } = this.props.topic;
  return (
    <View style={{marginHorizontal: 10}}>
      <Text>Tutorials for {this.state.data.topic} {title}</Text>
      <FlatList
        data={this.state.data.tutorials}
        renderItem={this.renderItem}
      />
    </View>
    )
  }
}

