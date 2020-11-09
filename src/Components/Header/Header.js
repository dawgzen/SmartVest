import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class StatusBar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#20658D', '#263143']}
                        style={styles.linearGradient}
                        start={{x: 0.7, y: 0}}
                    >
                        <Text style={styles.monitor}>MONITOR</Text>
                    </LinearGradient>
                </View>
            </>
        );
    };
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#263143',
        height: (windowHeight / 100) * 8,
        width: windowWidth,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    text: {
        textAlign: 'center',
        marginTop: '5%',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: (windowHeight / 100) * 8,
    },
    monitor: {
        color: 'white',
        fontSize: 25,
    },
});

export default StatusBar;
