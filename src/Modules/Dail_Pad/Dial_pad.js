import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import STRING from '../../Config/string'
import styles from './style';
import Single_Button from './componant/single_button';
import Call_Button from '../../Comman_Components/call_button';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Dial_pad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            text2:'',
            text3:''
        };
    }

    static navigationOptions = {
        header: null
    };

    onChangeHandler=(name,value)=>{
        this.setState({[name]:value})
    }

    onButtonClick=(name,value)=>{
        this.setState({[name]:value})
        // let finalText =this.state.text1+this.state.text2+this.state.text3
        // console.log(finalText)  //prints the concatenated text.
    }
    
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.header_container}>
                    <Text style={styles.main_text}> {STRING.SPLASH_DETAIL_TEXT} </Text>
                </View>
                <View style={styles.middle_container}>
                    <View style={styles.input_num_container}>
                        <TextInput style={styles.main_input_text}
                            underlineColorAndroid="transparent"
                            onChange={(name) => this.setState(name) }
                            value={this.state.name}
                            placeholder="Search"
                            placeholderTextColor="#FFFFFF"
                            autoCapitalize="none" />
                    </View>
                    <View style={styles.cancle_img_container}>
                        <TouchableOpacity>  
                            <Image source={require('../../Images/cancle_text.png')} style={styles.img_cancle_text} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottom_container}>
                    <View style={styles.row_numbers}>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"1"} onPress={()=> this.onButtonClick("1","0")} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"2"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"3"} />
                        </View>
                    </View>
                    <View style={styles.row_numbers}>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"4"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"5"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"6"} />
                        </View>
                    </View>
                    <View style={styles.row_numbers}>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"7"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"8"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"9"} />
                        </View>
                    </View>
                    <View style={styles.row_numbers}>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"*"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"0"} />
                        </View>
                        <View style={styles.single_btn_container}>
                            <Single_Button number={"#"} />
                        </View>
                    </View>

                    <View style={styles.row_buttons}>
                        <Call_Button
                            onPress={() => this.props.navigation.replace("OnCall")}
                            source={require('../../Images/call_icon.png')} />
                    </View>
                </View>
            </View>
        );
    }
}