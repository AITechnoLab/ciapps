import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Config/colors'

export default StyleSheet.create ({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.WHITE
    },
    logo_image_container: {
        width: wp('90%'), 
        alignItems: 'center',
        justifyContent: 'center',  
    },
    img_logo: {
        width: wp('50%'),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    main_text_container: {
        width: wp('95%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    main_text: {
        fontSize: 28,
        color: colors.GREYDARK,
        fontWeight: "bold",
        fontFamily:'Verdana',
        textAlign:'center',
    },
    sub_text_container:{
        width: wp('95%'),
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub_text:{
        fontSize: 14,
        color: colors.BLUE,
        fontWeight: "bold",
        fontFamily:'Verdana',
        textAlign:'center'
    }
});