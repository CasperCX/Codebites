import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Menu from './components/menu/Menu';
import Collections from './components/menu/Collections';
import Settings from './components/menu/Settings';


import Languages from './components/Languages';
import TopicView from './components/TopicView';
import TutorialView from './components/TutorialView';



const store = createStore(() => {}, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
          <Scene key="main">
              <Scene
                initial
                key="topics"
                title="topics"
                component={Languages} 
              />
              <Scene
                key="topicview"
                component={TopicView}
                title="Topic"
              />
              <Scene
                key="tutorialview"
                component={TutorialView}
                title="Tutorials"
              />
            </Scene>
            <Scene key="drawer"
                drawer
                contentComponent={Menu}
                drawerWidth={250}
                >
              <Scene
                key="settings"
                title="settings"
                component={Settings}
              />
              <Scene
                key="collections"
                title="collections"
                component={Collections}
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}


