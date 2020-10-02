/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  Text,
  Image,
  Button,
  // StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react';

class MyImage extends Component {
  render() {
    let image = '';
    if (this.props.group === 'kara') {
      image = require('./assets/hsy.jpg');
    } else if (this.props.group == 'itzy') {
      image = require('./assets/yeji.jpg');
    }
    return (<>
      <SafeAreaView>
        <Image source={image} style={{width: 100, height: 100}}></Image>
      </SafeAreaView>
    </>);
  }
}

class App extends Component {
  // const App: () => React$Node = () => {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    }
  }

  writeAddress = () => {
    this.setState({
      address: '몰라도 돼!',
    }, function() {
      alert('changed: ' + this.state.address);
    })
  }

  writeReset = () => {
    this.setState({
      address: '',
    })
  }

  render() {
    return (<>
      <SafeAreaView style={styles.view}>
        <Text>Hello world!</Text>
        <MyImage group='kara' />
        <MyImage group='itzy' />
        <Text>{this.state.address}</Text>
        <Button title='출력' onPress={this.writeAddress} />
        <Button title='리셋' onPress={this.writeReset} />
      </SafeAreaView>
    </>);
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
