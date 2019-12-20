import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import imagelogo from '../../Images/logo.png';
import STRING from '../../Config/string'
import styles from './style';

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        /* Set time for hold these screen */
        setTimeout(() => {
            this.load()
        }, 2000);
    }

    load = () => {
        /* Navigate to next screen */
        this.props.navigation.replace('Call_Logs');
    }

    render() {
        return (
            <View style={styles.main_container}>
                {/* Set Logo Image */}
                <View style={styles.logo_image_container}>
                    <Image source={imagelogo} style={styles.img_logo} />
                </View>
                <View style={styles.main_text_container}>
                    <Text style={styles.main_text}> {STRING.SPLASH_HEADING} </Text>
                </View>
                {/* <View style={styles.sub_text_container}>
                    <Text style={styles.sub_text}> {STRING.SPLASH_DETAIL_TEXT} </Text>
                </View> */}
            </View>
        );
    }
}