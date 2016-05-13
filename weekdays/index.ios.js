// Create a react Component

import React from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

const Weekdays = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    );
};

// Style React Component
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }
});


// Show React Component
AppRegistry.registerComponent('weekdays', () => {return Weekdays;} );
