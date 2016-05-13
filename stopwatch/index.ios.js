/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

class stopwatch extends Component {





    constructor (props) {
        super(props);
        this.state = {
            timeElapsed : null,
            running: false,
            startTime: null,
            laps: []
        };

    }

    handleStartPress() {
        if(this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false});
            return;
        }

        this.setState({startTime: new Date()});

        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30);

    }
    handleLapPress() {
        const lap = this.state.timeElapsed;
        this.setState({
            startTime: new Date(),
            laps: [...this.state.laps, lap]

        });
    }

    startButton() {

        const style = this.state.running ? styles.stopButton : styles.startButton;

        return (
            <TouchableHighlight
                onPress={this.handleStartPress.bind(this)}
                underlayColor="gray"
                style={[styles.button, style]}>
                <Text>
                    {this.state.running ? 'Stop' : 'Start'}
                </Text>
            </TouchableHighlight>
        );
    }
    lapButton() {
        return (
            <TouchableHighlight
                onPress={this.handleLapPress.bind(this)}
                underlayColor="gray"
                style={[styles.button, styles.lapButton]}>
                <Text>
                    Lap
                </Text>
            </TouchableHighlight>
        );
    }
    border(color) {
        return {
            borderColor: color,
            borderWidth: 4
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.timerWrapper}>
                        <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        {this.startButton()}
                        {this.lapButton()}
                    </View>
                </View>
                <View style={styles.footer}>
                    {
                        this.state.laps.map((lap) => {
                            return (
                                <View style={styles.lap} key={formatTime(lap)}>
                                    <Text style={styles.lapText}>
                                        Lap:
                                    </Text>
                                    <Text style={styles.lapText}>
                                        {formatTime(lap)}
                                    </Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'stretch'
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: 'green'
    },
    stopButton: {
        borderColor: 'red'
    },
    lapButton: {
        borderColor: 'yellow'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    lapText: {
        fontSize: 30
    }
});

AppRegistry.registerComponent('stopwatch', () => stopwatch);
