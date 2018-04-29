/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LotsOfGreetings from './screens/LotsOfGreetings';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non assumenda tempora harum voluptas voluptate officiis iure nobis modi tenetur. Voluptas quo esse sapiente atque suscipit a sint! Voluptas, deserunt!'
type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LotsOfGreetings />
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
