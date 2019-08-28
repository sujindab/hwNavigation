import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import SwitchNavigator from './switch/SwitchNavigator.js'
import StackNavigator from './stack/StackNavigator.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,marginTop:20}}>
        <SwitchNavigator/>
        // <StackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
