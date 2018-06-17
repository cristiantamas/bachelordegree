import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class StatisticsScreen extends Component{

    static navigationOptions = {
        title: 'Stats'
    };

    constructor(props){
        super(props);
    }

    render(){
        const { navigation } = this.props;

        return(
            <View>
                <Text>Statistics screen</Text>
            </View>
        );
    }
}