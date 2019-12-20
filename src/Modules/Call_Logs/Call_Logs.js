import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import List from './component/list';
import Search_Box from '../../Comman_Components/search_box';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FAB from 'react-native-fab';
import ActionSheet from 'react-native-actionsheet'
import styles from './style';
import string from '../../Config/string';

const _options = ['Missed calls', 'Outgoing calls', 'Incoming calls', 'cancel']

export default class Call_Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        header: null
    };

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={_options}
                    cancelButtonIndex={3}
                    destructiveButtonIndex={1}
                    onPress={(index) => { /* do something */ }} />

                <Search_Box />

                <View style={styles.option_container}>
                    <TouchableOpacity onPress={this.showActionSheet}>
                        <Text style={styles.option_text}>All</Text>
                    </TouchableOpacity>
                </View>

                {/* Set Flatlist when data comes from API */}
                <ScrollView>
                    <View style={styles.sub_container}>
                        <FlatList
                            data={string.Data_Log}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <List
                                name={item.name}
                                number={item.number}
                                date={item.date}
                                time={item.time}
                                status_img={item.status_img}
                                status_text={item.status_text}
                                duration={item.duration} />} />
                    </View>
                </ScrollView>
                <FAB
                    buttonColor={colors.LIGHTPINK}
                    iconTextColor="#FFFFFF"
                    onClickAction={() => this.props.navigation.navigate("Dial_pad")}
                    visible={true}
                    iconTextComponent={<Image source={require('../../Images/dial.png')} />} />

            </View>
        );
    }
}