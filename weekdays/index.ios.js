// Create a react Component

import React from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

const DAYS = ['Sunday', 'Monday', 'Tuesday'];

const Weekdays = () => {
    return (
        <View style={styles.container}>
            <Text>
                {Moment().format('ddd')}
            </Text>
            {
                DAYS.map((day) => {
                    return <DayItem key={day} day={day}/>;
                })
            }

        </View>
    );
};

// Style React Component
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }
});


// Show React Component
AppRegistry.registerComponent('weekdays', () => {return Weekdays;} );
