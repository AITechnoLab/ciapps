import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Config/colors'

export default StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        paddingTop: Platform.OS === 'android' ? 30 : 50,
    },
    sub_container: {
        marginTop: 4,
        width: wp('98%'),
    },
    option_container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        alignSelf: 'flex-end',
        marginRight: 20,
        borderWidth: 0.5,
        borderColor: colors.GREYDARK,
        alignItems: 'center'
    },
    option_text: {
        color: colors.GREYDARK
    },

});