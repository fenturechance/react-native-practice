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
import LifeCycleLogs from './components/LifeCycleLogs'

export default class App extends Component<Props> {
  state = {
    render : false
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.render ? <LifeCycleLogs count={3}/> : null}
        <Button
          title="Toggle counter render"
          onPress={()=>
            this.setState(prevState=>({
              render: !prevState.render 
            }))
          }
        ></Button>
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
