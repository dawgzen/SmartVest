import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions, ScrollView, Button, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import StatusBar from '../StatusBar/StatusBar';
import AnimatedCircularProgress from 'react-native-circular-progress/src/AnimatedCircularProgress';
import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Pulse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bpm: 0,
            fill: 0,
            monitor: true,
        };
    }

    componentDidMount(): void {
        this.interval = setInterval(() => this.randomBpm(), 1000);
    }

    randomBpm = () => {
        let bpmMin = 72;
        let bpmMax = 93;
        let bpm = Math.floor(Math.random() * (bpmMax - bpmMin)) + bpmMin;
        this.setState({bpm: bpm, fill: bpm / 2});
    };

    render() {
        return (
            <>
                <View>
                    <View style={styles.main}>
                        {this.state.monitor
                            ?
                            <View>
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
                            :
                            <View/>
                        }
                        {this.state.monitor
                            ?
                            <TouchableOpacity style={styles.next}
                                              onPress={() => this.setState({location: true, monitor: false})}>
                                <Text style={styles.buttonText}>Location</Text>
                            </TouchableOpacity>
                            :
                            <View/>
                        }


                        {this.state.location
                            ?
                            <View>
                                <Image style={{width: '100%', height: '80%'}}
                                       source={require('../../Assets/lcocation.png')}>
                                </Image>
                                <Text style={styles.coords}>Latitude: 53.247444</Text>
                                <Text style={styles.coords}>longitude: 6.529851</Text>
                            </View>
                            :
                            <View/>
                        }
                        {this.state.location
                            ?
                            <TouchableOpacity style={styles.previous}
                                              onPress={() => this.setState({location: false, monitor: true})}>
                                <Text style={styles.buttonText}>Monitor</Text>
                            </TouchableOpacity>
                            :
                            <View/>
                        }
                        {this.state.location
                            ?
                            <TouchableOpacity style={styles.next}
                                              onPress={() => this.setState({
                                                  location: false,
                                                  monitor: false,
                                                  camera: true,
                                              })}>
                                <Text style={styles.buttonText}>Infrared cam</Text>
                            </TouchableOpacity>
                            :
                            <View/>
                        }
                        {this.state.camera
                            ?
                            <View>
                                <Text style={{
                                    fontSize: 25,
                                    textAlign: 'center',
                                    color: 'white',
                                    marginTop: '25%',
                                }}>
                                    CAMERA IS OFFLINE
                                </Text>
                            </View>
                            :
                            <View/>
                        }
                        {this.state.camera
                            ?
                            <TouchableOpacity style={styles.previous}
                                              onPress={() => this.setState({
                                                  location: true,
                                                  monitor: false,
                                                  camera: false,
                                              })}>
                                <Text style={styles.buttonText}>Location</Text>
                            </TouchableOpacity>
                            :
                            <View/>
                        }
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
        next: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '25%',
            height: '10%',
            backgroundColor: 'red',
        },
        buttonText: {
            textAlign: 'center',
            marginTop: '15%',
            fontSize: 16,
            color: 'white',
        },
        previous: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '25%',
            height: '10%',
            backgroundColor: 'red',
        },
        coords: {
            color: 'white',
            textAlign:'center',
            marginTop:'5%',
        },
    })
;

export default Pulse;
