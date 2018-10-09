import React, { Component } from 'react';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Text, View,  TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';

export default class TopicTitle extends Component {
    state = {
        fontLoaded: false,
    }

    componentDidMount() {
        this.loadFonts();
    }

    async loadFonts(){
        try {
          await Font.loadAsync({
            'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
            'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
            'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
          });
        }
        catch(e) {
          Log.error(e);
        }
        finally {
          this.setState({fontLoaded: true});
        }
    }

  
    render() {
        return (
            <View>
               { this.state.fontLoaded ? (
                    <TouchableOpacity onPress={() => Actions.topicview({ topic: this.props.topic }) }>
                        <Text style={styles.titleText}>{this.props.topic.title}</Text>
                        <Text style={styles.titleInfo}>{this.props.topic.tutorialcount} tutorials</Text>
                    </TouchableOpacity>
                ) : null }
            </View>
          )
        }
}

// render() {
//     if (!this.state.fontLoaded) {
//         return <View></View>;
//     }

//     return (
//         <View>
//             <TouchableOpacity onPress={() => Actions.topicview({ topic: this.props.topic }) }>
//                 <Text style={styles.titleText}>{this.props.topic.title}</Text>
//                 <Text style={styles.titleInfo}>{this.props.topic.doors}</Text>
//             </TouchableOpacity>
//         </View>
//         );
//     }
// }


    const styles = StyleSheet.create({
        titleText: {
            fontFamily: 'montserrat-medium',
            fontSize: 30,
            color: '#ff473a'
        },
        titleInfo: {
            fontFamily: 'montserrat-regular',
            fontSize: 16,
            color: '#9e9e9e'
        }
    });
  
