import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';

import {trySignup} from '../../controller/SignupController';

export default class Signup extends Component{

    static navigationOptions = {
        title: 'Signup',
    };

    constructor(props){
        super(props);

        this.state={
            name: '',
            surname: '',
            mail: '',
            password: ''
        };
    }

    _handleSignUp = () => {

        /*
         * Check if fields are filled
         */
        if (this.state.name == '' || this.state.surname == '' || 
            this.state.mail == '' || this.state.password == ''){
                Alert.alert("Please fill all the fields");
                return;
        }

        trySignup(this.state.name, this.state.surname, this.state.mail, this.state.password).then(
            (result) => {
                if(result == 0){
                    Alert.alert("Could not sign up");
                    return;
                }

            }
        );
    }


    render(){
        return(
            <View style={styles.SignupScreen}>

                <FormLabel>Name</FormLabel>
                <FormInput textAlign='center'
                           onChangeText = {(text) => this.setState({name: text})}/>

                <FormLabel>Surname</FormLabel>
                <FormInput textAlign='center'
                           onChangeText = {(text) => this.setState({surname: text})}/>

                <FormLabel>Mail</FormLabel>
                <FormInput textAlign='center'
                           onChangeText = {(text) => this.setState({mail: text})}/>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} 
                           textAlign='center'
                           onChangeText = {(text) => this.setState({password: text})}/>

                
                <Button title = 'Sign up'
                        raised
                        onPress = {this._handleSignUp}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    SignupScreen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    FormStyle: {
        textAlign: 'center'
    }
});