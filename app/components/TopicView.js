import React, { Component } from 'react';
import { Font } from 'expo';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class TopicView extends Component {
  state = {
    tutorials: []
  }

  async componentDidMount() {
    this.loadFonts();
    try {
      //Generate new ngrok link on every restart using: ngrok http 5000 + /languages
      let res = await axios.get('http://7e7513a7.ngrok.io/javascript'); //API endpoint for testing!
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
    <View key={item.type} style={styles.item}>
        <Text style={styles.titleText}>{item.type}</Text>
        <Text style={styles.titleInfo}>{item.tutorialcount} Tutorials</Text>
    </View>
  )
}

render() {
  const { title } = this.props.topic;
  return (
    <View style={{marginHorizontal: 10}}>
      <Text>Topic view for {title}</Text>
      <FlatList
        data={this.state.tutorials}
        renderItem={this.renderItem}
      />
    </View>
    )
  }
}


const styles = StyleSheet.create({
  item: {
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    borderBottomColor: '#dedede',
    borderBottomWidth: 1
  },
  titleText: {
      fontFamily: 'montserrat-semibold',
      fontSize: 20,
      color: '#000000'
  },
  titleInfo: {
      fontFamily: 'montserrat-regular',
      fontSize: 16,
      color: '#9e9e9e'
  }
});




