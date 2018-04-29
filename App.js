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
  Button,
  TextInput
} from 'react-native';

export default class App extends Component<Props> {
  state = {
    text : '123',
  }
  changeText = text =>{
    this.setState({text});
  }
  clear = () => {
    this.setState({text : ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput} 
          onChangeText={this.changeText}
          value={this.state.text}
        />
        <Button
          title="clear"
          onPress={this.clear}
        />
        <Text style={styles.paragraph}>{this.state.text}</Text>
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
  paragraph : {
    margin : 24,
    fontSize : 18,
    fontWeight : 'bold',
    textAlign : 'center',
    color : '#34495e'
  },
  textInput: {
    backgroundColor : '#ddd',
    width : 100
  }
});
