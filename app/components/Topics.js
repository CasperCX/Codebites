import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { ScrollView, Text, View, FlatList, StyleSheet } from 'react-native';

import TopicTitle from './TopicTitle';

export default class Topics extends Component {
  menuOption = () => {
    console.log(this.setMenuOption.value)
  }
  
  state = {
    data: []
  }

  async componentWillMount() {
    try {
      //Generate new ngrok link and replace proxy in package.json every restart using: ngrok http 5000
      let res = await axios.get('http://8c854b92.ngrok.io/languages');
      this.setState({ data: res.data });
      } catch (error) {
        console.error(error);
    }
  }

  renderItem({item}) {
    return  (
      <View>
          <TopicTitle key={item.title} topic={item}>{item.title} - {item.tutorialcount}</TopicTitle>
      </View>
    )
  }

  // menuOption() {
  //   let term = this.menuValue;
  //   console.log("term:", term)
  // }

  
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <View elevation={5} style={styles.menu}>
          <View onPress={() => this.menuOption }>
            <Text ref={component => this.setMenuOption = component} style={styles.menuItems}>Languages</Text>
          </View>
          <Text style={styles.menuItems}>Topics</Text>
          <Text style={styles.menuItems}>Courses</Text>
          <Text style={styles.menuItems}>Trending</Text>
        </View>
        <FlatList style={{marginHorizontal: 10}}
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    padding: 8, 
    flexDirection: 'row'
  },
  menuItems: {
    fontSize: 16,
    paddingRight: 9
  }
});






// const dataSource = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2,
// });

// const mapStateToProps = state => {
//   return {
//       dataSource: dataSource.cloneWithRows(this.state.test)
//   }
// };


// export default connect(mapStateToProps, {})(Languages);