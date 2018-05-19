import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default class App extends Component {
  onPressButton = () => {
    alert('you did it');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>
        <Button title="Button" color="orange" />
        <TouchableOpacity onPress={this.onPressButton}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/squirtle.jpg')}
              style={styles.image}
            />
            <Text style={styles.label}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  image: {
    height: 140,
    width: 140,
    backgroundColor: '#00AAAA',
  },
  label: {
    color: '#FFF',
    marginTop: -20,
    fontWeight: 'bold',
  },
});
