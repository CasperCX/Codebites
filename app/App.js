import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Menu from './components/menu/Menu';
import Collections from './components/menu/Collections';
import Settings from './components/menu/Settings';


import Topics from './components/Topics';
import DomainView from './components/DomainView';
import TutorialView from './components/TutorialView';

import TutorialDetail from './components/TutorialDetail';



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
                title="Topics"
                component={Topics} 
              />
              <Scene
                key="domainview"
                component={DomainView}
                title="Domains"
              />
              <Scene
                key="tutorialview"
                component={TutorialView}
                title="Tutorials"
              />
              <Scene
                key="tutorialdetail"
                component={TutorialDetail}
                title="Tutorial"
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


