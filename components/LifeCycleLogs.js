import React , { Component } from 'react';
import { Text , View , Button , StyleSheet } from 'react-native';

export default class LifeCycleLogs extends Component {
    static defaultProps = {
        count : 0
    }
    state = {
        count : this.props.count
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps, nextState);
        return true;
    };
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate',nextProps, nextState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                count : prevState.count += 1
            }
        })
    }

    render() {
        console.log('render');
        return (
            <View style={style.container}>
                <Text>{this.state.count}</Text>
                <Button title="Add 1" onPress={this.handleIncrement}></Button>
            </View>

        );
    };
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
})