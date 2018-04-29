/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const title ='title 5566';
const array = [1,2,3];
const enable = false;
type Props = {};
export default class App extends Component<Props> {

  getEnable = (enable) => {
    if (enable) {
      return <Text>Enable</Text>
    } else {
      return <Text>Disable</Text>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        { /*this.getEnable(enable)*/ }
        <Text 
          //style={styles.welcome}
        >
          String : hello 
        </Text>
        <Text>{title}</Text>
        <Text>{array}</Text>
        <Text>{true},{false},{null},{undefined}</Text>
      </View>
    );
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
