import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    label: {
        padding: 10,
        fontSize: 20,
    }
});

export default class CountDownTimer extends Component {
    static defaultProps = {
        seconds: 3,
        onFinished: () => { }
    }
    state = {
        seconds: this.props.seconds || 5
    }
    componentDidMount = () => {
        this.setCountDownTimer();
    };
    setCountDownTimer = () => {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                if (prevState.seconds == 1) {
                    this.onTimesup();
                }
                return {
                    seconds: prevState.seconds - 1
                }
            })
        }, 1000)
    }
    clearTimer = () => {
        this.timer && clearTimeout(this.timer);
        console.log('clear timer');
    }
    componentWillUnmount = () => {
        console.log('will unmount');
        this.clearTimer();
    };
    onTimesup = () => {
        console.log('ontimeup');
        this.clearTimer();
        this.props.onFinished();
    }
    reset = () => {
        this.setState({
            seconds: this.props.seconds
        }, this.setCountDownTimer) //更新完後執行
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.state.seconds}</Text>
                <Button title="Reset" onPress={this.reset}></Button>
            </View>
        )
    }

}