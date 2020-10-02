/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import Hook from './Components/Hook';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({route, navigation}) {
  const post = route.params?.post
  useEffect(() => {
    if (post) {
      const old = post || 'empty'
      alert('Changed from ' + old + ' to ' + post);
      // TODO: 서버에 전송
    }
  }, [post])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{backgroundColor: 'grey', width: 300, height: 30}}>{post}</Text>
      <Button title='네비게이션 push 테스트' onPress={() => {navigation.navigate('Profile', {name: 'John doe'})}}></Button>
      <Button title='Hook 테스트' onPress={() => {navigation.navigate('Hook')}}></Button>
      <Button title='네비게이션 파라메터 전달 테스트' onPress={() => {navigation.navigate('Post', {oldPost: post})}}></Button>
    </View>
  );
}

function ProfileScreen({route, navigation}) {
  const {itemId} = route.params; // const itemId = route.params.itemId;
  const {name}   = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is Profile Screen #{JSON.stringify(itemId)}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title='홈으로' onPress={() => {navigation.popToTop()}}></Button>
        <Button title='< 뒤로' onPress={() => {navigation.goBack()}}></Button>
        <Button title='다음 >' onPress={() => {navigation.push('Profile', {itemId: itemId + 1, name: name})}}></Button>
      </View>
    </View>
  );
}

function PostScreen({route, navigation}) {
  const {oldPost} = route.params;
  const [text, setText] = useState(oldPost);
  return (
    <View style={{padding: 10}}>
      <TextInput
        multiline
        style={{height: 40}}
        placeholder='Enter a post here!'
        onChangeText={setText}
        value={text}
      />
      <Button
        title='게시'
        onPress={
          () => {navigation.navigate('Home', { post: text, old: oldPost })}
        }
      />
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} initialParams={{post: ''}} options={{title: 'Home'}} />
        <Stack.Screen name='Profile' component={ProfileScreen} initialParams={{itemId: 1}} options={{title: 'Profile'}} />
        <Stack.Screen name='Hook' component={Hook} options={{title: 'Hook'}} />
        <Stack.Screen name='Post' component={PostScreen} options={{title: 'Post'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
