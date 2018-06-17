import React, {Component} from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';

import {getUserData} from '../../controller/UserController';

export default class ProfileScreen extends Component{

    static navigationOptions = {
        title: 'Profile'
    };

    constructor(props){
        super(props);

        this.state={
            name: '',
            surname: '',
            mail: '',
            password: '',
            token: '',
        };
    }

    _handleUpdate = () => {
        console.log("Intra");
    }

    componentWillMount() {
        AsyncStorage.getItem('@userToken')
        .then( (value) => this.setState({ 'token': value }))
        .then(() => { this._handleReceivedData()})
    }


    _handleReceivedData = async () => {
        data = getUserData(this.state.token).then((data) => {
            console.log(data);

            this.setState({
                name: data['name'],
                surname: data['surname'],
                mail: this.state.token
            });
        });

    }

    render(){
        return(
            <View style={styles.SignupScreen}>

                <FormLabel>Name</FormLabel>
                <FormInput textAlign='center'
                           value = {this.state.name}
                           onChangeText = {(text) => this.setState({name: text})}/>

                <FormLabel>Surname</FormLabel>
                <FormInput textAlign='center'
                           value = {this.state.surname}
                           onChangeText = {(text) => this.setState({surname: text})}/>

                <FormLabel>Mail</FormLabel>
                <FormInput textAlign='center'
                           value = {this.state.mail}
                           onChangeText = {(text) => this.setState({mail: text})}/>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} 
                           textAlign='center'
                           onChangeText = {(text) => this.setState({password: text})}/>
                
                <Button title = 'Update'
                        onPress = {() => this._handleUpdate()}/>

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