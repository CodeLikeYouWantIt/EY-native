/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View} from 'react-native';
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
  constructor(){
    super();
    this.state={

    }

  }
  
  componentWillMount(){
    
  }
  
  render(){
    return(
    <View style={{flex:1}}>
      <Header header={"Login"}/>
      <LoginForm/>
      {/* <SeriesList/> */}
    </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;