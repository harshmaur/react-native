// Create a react Component

import React, {PropTypes} from 'react';
import {Text, StyleSheet} from 'react-native';

const DayItem = ({day}) => {
    return (
        <Text style={styles.day}>{day}</Text>
    );
};

// Style React Component
const styles = StyleSheet.create({
    day: { fontSize: 18, color: '#000FFF' }
});

DayItem.propTypes = {
    day: PropTypes.string.isRequired
};

export default DayItem;
