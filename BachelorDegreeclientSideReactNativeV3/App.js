import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './components/login/Login';
import Signup from './components/login/Signup';

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
    backgroundColor: '#212121',
    },
    headerTitleStyle: {
    color: '#fff'
    }
    };

  render() {

    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
