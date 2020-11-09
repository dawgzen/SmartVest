import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions, ScrollView, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import StatusBar from '../StatusBar/StatusBar';
import AnimatedCircularProgress from 'react-native-circular-progress/src/AnimatedCircularProgress';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Pulse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bpm: 0,
            fill: 0,
        };
    }

    componentDidMount(): void {
        this.interval = setInterval(() => this.randomBpm(), 1000);
    }

    randomBpm = () => {
        let bpmMin = 65;
        let bpmMax = 130;
        let bpm = Math.floor(Math.random() * (bpmMax - bpmMin)) + bpmMin;
        this.setState({bpm: bpm, fill: bpm / 2});
    };

    render() {
        return (
            <>
                <View>
                    <View style={styles.main}>
                        <AnimatedCircularProgress
                            style={styles.circle}
                            size={300}
                            width={3}
                            fill={this.state.fill}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875">
                            {
                                (fill) => (
                                    <View style={styles.inner}>
                                        <Animatable.Text
                                            animation="pulse"
                                            easing="ease-out"
                                            iterationCount="infinite"
                                            style={{textAlign: 'center', marginTop: '5%', fontSize: 50}}>
                                            ❤️
                                        </Animatable.Text>
                                        <Text style={styles.number}>{this.state.bpm}</Text>
                                        <Text style={styles.bpm}>BPM</Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>


                    </View>
                    <StatusBar
                        bpm={this.state.bpm}/>
                </View>
            </>
        );
    };
}


const styles = StyleSheet.create({
        main: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#263143',
            height: (windowHeight / 100) * 70,
            borderTopWidth: 1,
            borderTopColor: 'white',
        },
        number: {
            fontSize: 95,
            textAlign: 'center',
            color: 'white',
        },
        bpm: {
            fontSize: 25,
            textAlign: 'center',
            color: 'grey',
        },
        circle: {
            alignItems: 'center',
            marginTop: '15%',
        },
        inner: {
            marginLeft: '40%',
        },
    })
;

export default Pulse;
