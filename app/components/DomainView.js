import React, { Component } from 'react';
import { Font } from 'expo';
import axios from 'axios';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import DomainTitle from './DomainTitle';

export default class DomainView extends Component {
  state = {
    loading: true,
    tutorials: []
  }

  async componentDidMount() {
   const { title, topicId } = this.props.topic;
   console.log("got:", this.props.topic)
    this.loadFonts();
    try {
      //Generate new ngrok link and replace proxy in package.json every restart using: ngrok http 5000
      let res = await axios.get(`http://3e624120.ngrok.io/topic/${title}?topicId=${topicId}`); //API endpoint for testing!
      this.setState({ tutorials: res.data.domain, loading: false });
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
    <DomainTitle key={item.title} topic={item}>{item.title}</DomainTitle>
  )
}

render() {
  const { title } = this.props.topic;
  if (this.state.loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      )} else {
        return (
          <View style={{marginHorizontal: 10}}>
            <Text>Tutorials found for: {this.props.topic.title}</Text>
            <FlatList
              data={this.state.tutorials}
              renderItem={this.renderItem}
            />
          </View>
          )
        }
      }
}


const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});




