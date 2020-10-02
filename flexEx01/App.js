/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'orange'}}></View>
        <View style={{flex: 3, backgroundColor: 'yellow'}}></View> */}

        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'orange'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    alignItems: 'center',
    // alignItems: 'stretch',
  },
});

export default App;
