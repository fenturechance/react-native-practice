import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Greeting from '../components/Greeting';

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View>
                <Greeting name="React" />
                <Greeting name="Native" />
            </View>
        )
    }
}