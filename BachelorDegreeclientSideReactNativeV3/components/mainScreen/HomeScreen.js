import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom, createStackNavigator } from 'react-navigation';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//Import from Customs
import MainScreenHeader from '../Customs/MainScreenHeader';

import ActivitiesScreen from './ActivitiesScreen';
import HistoryScreen from './HistoryScreen';
import StatisticsScreen from './StatisticsScreen';
import ProfileScreen from './ProfileScreen';


export default class HomeScreen extends React.Component{

    static navigationOptions = {
        title: 'Home',
    };


    _goToProfile = () => {
        this.props.navigation.navigate('ProfileScreen');
    }


    render() {

        const { navigate } = this.props.navigation;
        return (
            <View>
                <Header
                    rightComponent = {
                            <TouchableHighlight onPress={ () => navigate('ProfileScreen')}>
                                 <Icon
                                    name='user'
                                    size={30}
                                    color='black'/>
                            </TouchableHighlight>
                    }
                />
            </View>
        );
    }
}

