import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Config/colors'

export default StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        paddingTop: 40
    },
    header_container: {
        width: wp('100%'),
        height: hp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    detail_text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.GREYLIGHT,
    },
    name_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.BLACK,
        marginTop: 4
    },
    middle_container: {
        width: wp('100%'),
        height: hp('40%'),
    },
    image_container: {
        width: wp('100%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile_image: {
        width: wp('40%'),
        height: hp('18%'),
    },
    timer_text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.GREYDARK,
        marginTop: 20
    },
    bottom_container: {
        width: wp('100%'),
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    row_container: {
        width: wp('100%'),
        height: hp('20%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    single_btn_container: {
        width: wp('30%'),
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});