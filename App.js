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
  View,
  Button
} from 'react-native';

export default class App extends Component<Props> {
  state = {
    content : 'nothing',
    isLoading : false,
  }
  handleButton = () =>{
    this.setState({ isLoading : true });
    setTimeout(()=>{
      this.setState({
        content : 'received something',
        isLoading : false
      })
    },1500)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.isLoading ? 'loading....' : this.state.content }
        </Text>
        <Button title="Press me" onPress={this.handleButton} />
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
