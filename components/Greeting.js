import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';


export default class Greeting extends Component {
    static dafaultProps = {
        name : 'guest'
    }
    static propTypes = {
        name : PropTypes.string.isRequired,
        age : PropTypes.number,
        headerComponent : PropTypes.element
    }
    render(){
        return (
        <Text>Hello {this.props.name}</Text>
        )
    }
}
