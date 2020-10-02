/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
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
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('./assets/hsy.jpg')} style={{width: 100, height: 100}} />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>활동연대</Text>
              <Text style={styles.detail}>2000, 2010</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.title, styles.point]}>출생</Text>
              <Text style={styles.detail}>1993.05.16 | 한국</Text>
            </View>
          </View>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'green'}} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15,
  },
  point: {
    color: 'red',
  },
  detail: {
    marginLeft: 5,
  },
});

export default App;
