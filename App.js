import React, {useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import StatusBar from './src/Components/StatusBar/StatusBar';
import Header from './src/Components/Header/Header';
import Pulse from './src/Components/Pulse/Pulse';


const App: () => React$Node = () => {
    return (

        <>
            <SafeAreaView>
                <ScrollView>
                    <Header/>
                    <Pulse/>
                    {/*<StatusBar/>*/}
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default App;
