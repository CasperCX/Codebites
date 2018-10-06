import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Menu from './components/Menu';
import Languages from './components/Languages';


const store = createStore(() => {}, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
              <Scene key="main">
                  <Scene
                      key="menu"
                      rightTitle="menu"
                      onRight={() => Actions.openmenu()}
                      component={Languages} 
                  />
                  <Scene
                      key="openmenu"
                      component={Menu} 
                      title="Menu"
                  />
              </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}


