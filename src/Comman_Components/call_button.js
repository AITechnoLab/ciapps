import React from 'react';
import { Text, StyleSheet, View,Image,  ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../Config/colors";

export default Call_Button = ({ number, onPress, source }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../Images/round_circle.png')}>
                    <Image source={source}
                        style={styles.call_image} />
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('30%'),
        height: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    call_image:{
        width: 48,
        height: 48,
    },
    backgroundImage: {
        width: wp('30%'),
        height: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center'
    },

});
