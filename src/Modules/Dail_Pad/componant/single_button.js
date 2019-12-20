import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../../Config/colors";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default Single_Button = ({ number, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../../Images/round_circle.png')}>
                <Text style={styles.text_number}>
                    {number}
                </Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('32%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: wp('28%'),
        height: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_number: {
        fontSize: 38,
        color: colors.GREYDARK,
        fontWeight: 'bold',
        marginBottom: 4
    }

});
