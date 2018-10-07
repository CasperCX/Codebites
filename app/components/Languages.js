import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { ScrollView, Text, View, FlatList, Button } from 'react-native';

export default class Languages extends Component {
  state = {
    data: []
    // data: [{'key': 'a'}, {'key': 'b'}, {'key': 'c'}]
    // data: [
    //   {"model":"Sentra", "doors":4},
    //   {"model":"Maxima", "doors":4},
    //   {"model":"Skyline", "doors":2}
    // ]
  }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/languages')
  //     .then(function (response) {
  //       console.log("Componentdidmount:", response);
  //     })
  //     .catch(function (error) {
  //       console.log("componentdidmount error: ",error);
  //   });
  // }

  // componentWillMount() {
  //   try {
  //     let response = await fetch(
  //       'http://localhost:5000/languages'
  //     );
  //     let responseJson = await response.json();
  //     console.log(responseJson)
  //   } catch (error) {
  //     console.error(error);
  //     }
  //   }
  // }

  //Make backend call
  // async componentWillMount() {
  //   console.log("calling will mount")
  //   const res = await axios.get('http://localhost:5000/languages');
  //   console.log("GOT:", res)
  //   this.setState({ data: [...res] });
  // }

  renderItem({item}) {
    console.log(item)
        return  (
          <View>
             <Text>{item.model}</Text>
          </View>
        )
  }

  async onPress() {
    console.log("pressed button for SW api");
    try {
      //Generate new ngrok link on every restart using: ngrok http 5000
      let response = await fetch('http://fe030a79.ngrok.io/languages');
      let responseJson = await response.json();
      console.log("got:", responseJson);
      this.setState({ data: responseJson });
      console.log("current state");
      console.log(this.state.data);
      // console.log(responseJson);
      } catch (error) {
      console.error(error);
      }
    }
  

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
        />
        <Button
          title="get data"
          onPress={this.onPress.bind(this)}
        />
      </View>
    )
  }
}





// const dataSource = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2,
// });

// const mapStateToProps = state => {
//   return {
//       dataSource: dataSource.cloneWithRows(this.state.test)
//   }
// };


// export default connect(mapStateToProps, {})(Languages);