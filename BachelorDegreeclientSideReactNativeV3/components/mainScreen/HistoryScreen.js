import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class HistoryScreen extends Component{

    static navigationOptions = {
        title: 'History'
    };

    constructor(props){
        super(props);
    }

    render(){
        const { navigation } = this.props.navigation;

        return(
            <View>
                <Text>History screen</Text>
            </View>
        );
    }
}