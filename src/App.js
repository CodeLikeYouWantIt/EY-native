/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
    <Provider store={store}>
      <View style={{flex:1}}>
        <LoginForm/>
      </View>
    </Provider>
      
    )
  }
}
export default App