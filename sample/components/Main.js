import React from 'react';

import Icon from 'react-native-ionicons'
import {NavigationContainer, TabActions} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './Home'
import SettingsScreen from './Settings'

const Tab = createBottomTabNavigator();

const Main = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              break;
            case 'Settings':
              iconName = focused ? 'ios-list-box' : 'ios-list';
              break;
            default:
              iconName = '';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        }
      })}

      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Main;
