/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View, Text} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { connect } from 'react-redux'
import {Header} from './components/common'
import SeriesList from './components/SeriesList'
import LoginForm from './components/LoginForm'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render(){
    return(
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <LoginForm/>
      </View>
    </Provider>
      
    )
  }
}
export default App