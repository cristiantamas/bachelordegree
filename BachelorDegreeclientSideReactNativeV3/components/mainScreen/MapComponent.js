import React from 'react';
import {View, StyleSheet} from 'react-native';
/*import MapView from 'react-native-maps';

const userMap = props => {
    return(


        <View accessible={true} style={styles.container}>
  
  
  
      <MapView
      style={ styles.map }
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  />
  
  
        </View>
  
  
  
      );
}

export default userMap;*/

const styles = StyleSheet.create({
    fadeIn:{
      width:250,
      height:50,
      backgroundColor:'#bdc3c7',
    },
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });