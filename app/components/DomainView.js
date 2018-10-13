import React, { Component } from 'react';
import { Font } from 'expo';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import DomainTitle from './DomainTitle';

export default class DomainView extends Component {
  state = {
    tutorials: []
  }

  async componentDidMount() {
   const { term, topicId } = this.props.topic;
    this.loadFonts();
    try {
      //Generate new ngrok link and replace proxy in package.json every restart using: ngrok http 5000
      let res = await axios.get(`http://2d939f56.ngrok.io/topic/${term}?topicId=${topicId}`); //API endpoint for testing!
      this.setState({ tutorials: res.data.domain });
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
    <DomainTitle key={item.title} topic={item}>{item.title}subtopictitle</DomainTitle>
  )
}

render() {
  const { title } = this.props.topic;
  return (
    <View style={{marginHorizontal: 10}}>
      <Text>4350 Tutorials found for Javascript</Text>
      <FlatList
        data={this.state.tutorials}
        renderItem={this.renderItem}
      />
    </View>
    )
  }
}






