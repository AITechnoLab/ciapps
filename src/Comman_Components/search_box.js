import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from "../Config/colors";


export default Search_Box = ({ }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.box_container}>
                <TouchableOpacity>
                    <Image source={require('../Images/seach.png')}
                        style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

                <TextInput style={Styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Search"
                    placeholderTextColor="#FFFFFF"
                    autoCapitalize="none"/>
                    
                <TouchableOpacity>
                    <Image source={require('../Images/close.png')}
                        style={{ width: 14, height: 14 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.WHITE
    },
    box_container: {
        width: wp('90%'),
        height: 40,
        backgroundColor: colors.LIGHTPINK,
        borderRadius: 8,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
    },
    input: {
        width: wp('70%'),
        color: colors.WHITE,
        fontSize: 16,
        marginLeft: 12,
        marginTop:2
    },

});