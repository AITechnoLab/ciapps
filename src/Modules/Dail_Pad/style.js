import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Config/colors'

export default StyleSheet.create ({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:colors.WHITE
    },
    header_container:{
        height:hp('20%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.LIGHTPINK,
        paddingTop:12,
    },
    main_text: {
        fontSize: 16,
        color: colors.WHITE,
        fontWeight: "bold",
        fontFamily:'Verdana',
        textAlign:'center',
        marginLeft:16,
        marginRight:16
    },
    middle_container:{  
        height:hp('15%'),
        flexDirection:'row',
        alignItems:'center'
    },
    bottom_container:{
        height:hp('65%'),
    },
    input_num_container:{
         width:wp('85%'),
    },
    main_input_text:{
        width:wp('85%'),
        height:hp('10%'),
        textAlign:'right',
        fontSize:40,
        fontWeight:'bold',
        color:colors.GREYDARK,
        paddingRight:8
    },
    cancle_img_container:{
        width:wp('15%'),
        justifyContent:'center',
        alignItems:'center',
    },
    img_cancle_text:{
        width:38,
        height:30
    },
    row_numbers:{
        width:wp('100%'),
        height:hp('12%'),
        flexDirection:'row',
        justifyContent:'center',
    },
    row_buttons:{
        width:wp('100%'),
        height:hp('14%'),
        justifyContent:'center',
        alignItems:'center',
    },
    single_btn_container:{
        width:wp('32%'), 
    },
    
});