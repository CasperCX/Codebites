import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import { Content, List, ListItem } from 'native-base';


export default class Menu extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: '#2c3e50', justifyContent: 'center', alignItems: 'center'}}>

          </View>

          <View style={{flex: 2}}>
            <Content>
              <List>
                <ListItem onPress={() => Actions.collections()}>
                  <Text>Collections</Text>
                </ListItem>
                <ListItem onPress={() => Actions.settings()}>
                  <Text>Settings</Text>
                </ListItem>
              </List>
            </Content>
          </View>
        </View>
    )
  }
}
