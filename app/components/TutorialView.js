import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';
import axios from 'axios';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


export default class TutorialView extends Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: true,
      data: []
    }

    this.renderItem = this.renderItem.bind(this)
  }


  // componentWillMount() {
  //   this.setState({term: this.props.topic.term});
  // )

  async componentDidMount() {
    //Load fonts
    this.loadFonts();

    const { domainId, domain } = this.props.topic;

    try {
      //Generate new ngrok link and replace proxy in package.json every restart using: ngrok http 5000
      let res = await axios.get(`http://3e624120.ngrok.io/${domainId}/${domain}`); //API endpoint for testing!
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
    return (
        <View style={styles.item}>
            {/* { this.state.fontLoaded ? ( */}
                <TouchableOpacity onPress={() => Actions.tutorialdetail({ tutorial: this.state.data.tutorials.find(obj => obj.tutorialId == item.tutorialId) }) }>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.titleInfo}>{item.tutorialId}</Text>
                </TouchableOpacity>
            {/* ) : null } */}
        </View>
        )
};

render() {
  const { title } = this.props.topic;
  return (
    <View style={{marginHorizontal: 10}}>
      <Text>{this.state.data.topic} {title}</Text>
      <FlatList
        data={this.state.data.tutorials}
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
  

