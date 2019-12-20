import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../../../Config/colors";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default List = ({ name, number, date, ago, time, status_img, status_text, duration }) => {

    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                <View style={styles.image_container}>
                    <Image
                        source={require('../../../Images/user.png')}
                        style={{ width: 40, height: 40 }} />
                </View>
                <View style={styles.name_container}>
                    <View style={styles.sub_container}>
                        <Text style={styles.name_text} numberOfLines={1}
                            ellipsizeMode={'tail'} >{name} </Text>
                        <Text style={styles.number_text}>{number} </Text>
                        <View style={styles.detail_container}>
                            <Image source={status_img} style={{ width: 10, height: 10, marginTop:2 }}/>
                            <Text style={styles.status_text}> {status_text} </Text>
                            <Text style={styles.duration_text}> {duration} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.date_container}>
                    <View style={styles.sub_container}>
                        <Text style={styles.date_text}> {date} </Text>
                        <Text style={styles.date_text}> {time} </Text>
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('96%'),
        padding: 4,
        justifyContent: 'center',
        backgroundColor: colors.WHITE
    },
    main_container: {
        flexDirection: 'row',
        padding: 4,
    },
    image_container: {
        width: wp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    name_container: {
        width: wp('40%'),
        paddingLeft: 8
    },
    date_container: {
        width: wp('36%'), 
        alignItems: 'flex-end',      
    },
    sub_container: {
        flexDirection: 'column',
        justifyContent:'center', 
    },
    name_text: {
        fontSize: 16,
        fontFamily: 'Verdana',
        
    },
    date_text: {
        fontSize: 10,
        fontFamily: 'Verdana',
        color: colors.GREYSEMIDARK,
        marginTop: 4,
        textAlign: 'right',  
    },
    ago_text: {
        fontSize: 10,
        fontFamily: 'Verdana',
        color: colors.GREYLIGHT,
        marginTop: 2,
        textAlign: 'right'
    },
    number_text: {
        fontSize: 12,
        fontFamily: 'Verdana',
        color: colors.GREYDARK,
        marginTop: 4,
       
    },
    detail_container: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop:4,
        alignItems:'flex-start'
    },
    status_text:{
        fontSize: 10,
        fontFamily: 'Verdana',
        color: colors.GREYDARK,
    },
    duration_text:{
        fontSize: 10,
        fontFamily: 'Verdana',
        color: colors.GREYLIGHT,
        marginLeft:0
    },
    line:{
        width:wp('90%'),
        height:0.3,
        backgroundColor:colors.GREYSEMIDARK,
        marginTop:8,
        alignSelf:'center'
    }
});
