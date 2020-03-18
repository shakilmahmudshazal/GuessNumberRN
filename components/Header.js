import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default App = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: 'black',
        fontSize: 18

    }
});
