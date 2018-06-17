import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class ActivitiesScreen extends Component{

    static navigationOptions = {
        title: 'Activities'
    };

    constructor(props){
        super(props);
    }

    render(){
        const { navigation } = this.props.navigation;

        return(
            <View>
                <Text>Activities screen</Text>
            </View>
        );
    }
}