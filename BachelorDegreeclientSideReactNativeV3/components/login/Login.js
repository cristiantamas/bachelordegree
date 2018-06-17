import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, AppRegistry, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom, createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';
//import SnackBar from 'react-native-snackbar-dialog';

import Signup from './Signup';
import HomeScreen from '../mainScreen/HomeScreen';
import {tryLogin} from '../../controller/LoginController';

import ActivitiesScreen from '../mainScreen/ActivitiesScreen';
import HistoryScreen from '../mainScreen/HistoryScreen';
import StatisticsScreen from '../mainScreen/StatisticsScreen';
import ProfileScreen from '../mainScreen/ProfileScreen';

export default class Login extends React.Component{

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props){
        
        super(props);

        this.state= {
            mail : 'cristiantamas05@gmail.com',
            password : 'parola'
        };
    }

    _handleLogin = () => {
        
        /*
         * Check if username or password are filled
         */
        if (this.state.mail == '' || this.state.password == ''){
            Alert.alert("Please fill both username and password");
            return;
        }


        /*tryLogin(this.state.mail, this.state.password).then(
            (result) =>{
                if(result == 0){
                    SnackBar.show('Wrong mail or password', { duration: 3000 });
                    return;
                }
                
                navigate('HomeScreen');
                //SnackBar.show('Logging in..', { duration: 3000 });
            }
        );*/

        try{
             AsyncStorage.setItem('@userToken', "cristiantamas05@gmail.com"/*this.state.mail*/);
        } catch (error){
            console.log(error);

        }
        this.props.navigation.navigate('HomeScreen');
    }


    render(){
        
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.loginScreen}>

                <FormLabel>Mail</FormLabel>
                <FormInput textAlign='center'
                           value = {"cristiantamas05@gmail.com"}
                           onChangeText = {(text) => this.setState({mail: text})}/>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} 
                           textAlign='center'
                           value = {"parola"}
                           onChangeText = {(text) => this.setState({password: text})}/>

                 <Button title = 'Login'
                         raised
                         onPress = {this._handleLogin}/>

                 <Button title = 'Sign up'
                         raised
                         onPress = {() => navigate('Signup')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginScreen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });



//Contains the main screen swipe components
const MainScreenTab = TabNavigator({
        HomeScreen: {screen: HomeScreen},
        Activites: {screen: ActivitiesScreen},
        History: {screen: HistoryScreen},
        StatisticsScreen: {screen: StatisticsScreen}
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeScreen',
    });


//Contains the main screen tab component and profile screen
const MainScreenStack= StackNavigator({
        MainScreenTab: {screen: MainScreenTab},
        ProfileScreen: {screen: ProfileScreen}
    }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
       });


//Contains the login and signup screen swipe components
const UserRegistrationTab= TabNavigator({
        Login: {screen: Login},
        Signup: {screen: Signup}
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: 'Login',
    });



//Main app screen navigator
const myScreens= StackNavigator({
        UserRegistrationTab: {screen: UserRegistrationTab},
        MainScreenStack: { screen: MainScreenStack },
    }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
       });


  
  AppRegistry.registerComponent('BachelorDegreeclientSideReactNativeV3', () => myScreens);
  