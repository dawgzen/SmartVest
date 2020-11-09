import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions, ScrollView, Button} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class StatusBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stressLevel: 'Nominal',
            bpm: this.props.bpm,
            bodyTemp: 36.6,
            injuries: 'none',
            camera: 'offline',
            airTemp: 22,
            bpmColor: 'white',
            stressLevelColor: 'white',
            bodyTempColor: 'white',
            injuryColor: 'white',
            cameraColor: 'white',
            airTempColor: 'white',
        };
    }


    componentDidMount(): void {
        this.updateStatus();
        this.interval = setInterval(() => this.randomValues(), 5000);
        this.interval = setInterval(() => this.setBpm(), 1000);
    }

    setBpm = () => {
        this.setState({bpm: this.props.bpm});
        this.updateStatus();
    };

    randomValues = () => {
        let bodyMin = 35;
        let bodyMax = 43;
        let body = Math.floor(Math.random() * (bodyMax - bodyMin)) + bodyMin;

        let tempMin = -11;
        let tempMax = 35;
        let temp = Math.floor(Math.random() * (tempMax - tempMin)) + tempMin;

        this.setState({bodyTemp: body, airTemp: temp});
        this.updateStatus();
    };
    updateStatus = () => {
        let {stressLevel, bpm, bodyTemp, injuries, camera, airTemp} = this.state;
        //BPM
        console.log(bpm);
        if (bpm < 70) {
            this.setState({bpmColor: 'green', stressLevel: 'Normal', stressLevelColor: 'green'});
        }
        if (bpm > 70 && bpm < 90) {
            this.setState({bpmColor: 'orange', stressLevel: 'Tense', stressLevelColor: 'yellow'});
        }
        if (bpm > 90 && bpm < 110) {
            this.setState({bpmColor: 'orange', stressLevel: 'High', stressLevelColor: 'orange'});
        }
        if (bpm > 110) {
            this.setState({bpmColor: 'red', stressLevel: 'Caution', stressLevelColor: 'red'});
        }

        //BODYTEMP
        if (bodyTemp < 33.8) {
            this.setState({bodyTempColor: 'grey'});
        }
        if (bodyTemp < 35.8 && bodyTemp > 33.8) {
            this.setState({bodyTempColor: 'lightblue'});
        }
        if (bodyTemp > 35.8 && bodyTemp <= 37.1) {
            this.setState({bodyTempColor: 'green'});
        }
        if (bodyTemp > 37.1 && bodyTemp <= 37.5) {
            this.setState({bodyTempColor: 'lightgreen'});
        }
        if (bodyTemp > 37.5 && bodyTemp <= 38) {
            this.setState({bodyTempColor: 'yellow'});
        }
        if (bodyTemp > 38 && bodyTemp <= 38.5) {
            this.setState({bodyTempColor: 'orange'});
        }
        if (bodyTemp > 38.5 && bodyTemp <= 39.5) {
            this.setState({bodyTempColor: 'orange'});
        }
        if (bodyTemp > 39.5 && bodyTemp <= 43) {
            this.setState({bodyTempColor: 'red'});
        }

        //INJURIES
        if (injuries === 'none') {
            this.setState({injuryColor: 'green'});
        }
        if (injuries === 'light') {
            this.setState({injuryColor: 'yellow'});
        }
        if (injuries === 'medium') {
            this.setState({injuryColor: 'orange'});
        }
        if (injuries === 'heavy') {
            this.setState({injuryColor: 'red'});
        }

        //CAMERA
        if (camera === 'online') {
            this.setState({cameraColor: 'green'});
        }
        if (camera === 'offline') {
            this.setState({cameraColor: 'red'});
        }

        //AIR TEMP
        if (airTemp < 0) {
            this.setState({airTempColor: 'white'});
        }
        if (airTemp > 0 && airTemp <= 6) {
            this.setState({airTempColor: 'lightblue'});
        }
        if (airTemp > 6 && airTemp <= 11) {
            this.setState({airTempColor: 'blue'});
        }
        if (airTemp > 11 && airTemp <= 14) {
            this.setState({airTempColor: 'purple'});
        }
        if (airTemp > 14 && airTemp <= 20) {
            this.setState({airTempColor: 'green'});
        }
        if (airTemp > 20 && airTemp <= 24) {
            this.setState({airTempColor: 'yellow'});
        }
        if (airTemp > 24 && airTemp <= 29) {
            this.setState({airTempColor: 'orange'});
        }
        if (airTemp > 29) {
            this.setState({airTempColor: 'red'});
        }

    };

    render() {
        let {
            stressLevel,
            bpm,
            bodyTemp,
            injuries,
            camera,
            airTemp,
            bpmColor,
            stressLevelColor,
            bodyTempColor,
            injuryColor,
            cameraColor,
            airTempColor,
        } = this.state;
        return (
            <>
                <View style={styles.status}>
                    <View style={styles.stats}>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>Stress level</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: stressLevelColor,
                            }}>
                                {stressLevel}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>BPM</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                color: bpmColor,
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                                {bpm}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>Body Temp</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: bodyTempColor,
                            }}>
                                {bodyTemp}c
                            </Text>
                        </View>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>Injuries</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: injuryColor,
                            }}>
                                {injuries}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>Camera</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: cameraColor,
                            }}>
                                {camera}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.upperText}>Air Temp</Text>
                            <Text style={{
                                textAlign: 'center',
                                marginTop: '3%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: airTempColor,
                            }}>
                                {airTemp}c
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        );
    };
}


const styles = StyleSheet.create({
    status: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#263143',
        height: (windowHeight / 100) * 20,
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    item: {
        width: windowWidth / 3,
        borderWidth: 1,
        borderColor: 'white',
    },
    upperText: {
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        color: 'white',
    },
});

export default StatusBar;
