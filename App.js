import React, {useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Header from './src/Components/Header/Header';
import Pulse from './src/Components/Pulse/Pulse';


const App: () => React$Node = () => {
    return (

        <>
            <SafeAreaView>
                <ScrollView>
                    <Header/>
                    <Pulse/>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default App;
