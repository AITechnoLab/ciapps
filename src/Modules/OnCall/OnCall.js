import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, FlatList } from 'react-native';
import styles from './style';
import Call_Button from '../../Comman_Components/call_button';


export default class OnCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0
        };
    }

    static navigationOptions = {
        header: null
    };

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    setLogDetails(id) {

        alert(id)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                    <Text style={styles.detail_text}>Calling to...</Text>
                    <Text style={styles.name_text}>Stave Rogars</Text>
                </View>

                <View style={styles.middle_container}>
                    <View style={styles.image_container}>
                        <Image
                            source={require('../../Images/calluser.png')}
                            style={styles.profile_image} />
                        <Text style={styles.timer_text}> 00:00:00 </Text>
                    </View>
                </View>
                <View style={styles.bottom_container}>
                    <View style={styles.row_container}>
                        <View style={styles.single_btn_container}>
                            <Call_Button
                                source={require('../../Images/mute.png')} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Call_Button
                                onPress={() => this.props.navigation.replace("Call_Logs")}
                                source={require('../../Images/disconnect.png')} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Call_Button
                                source={require('../../Images/specker_of.png')} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}