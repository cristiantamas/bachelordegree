import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'react-native-elements';


export default class MainScreenHeader extends React.Component{

    render(){
        return(
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