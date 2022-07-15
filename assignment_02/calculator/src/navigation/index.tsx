import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalculateScreen from '../screens/Calculate';
import ResultScreen from '../screens/Result';

const Tab = createBottomTabNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="CalculateScreen"
        component={CalculateScreen}
        options={{title: 'Calculate'}}
      />
      <Tab.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{title: 'Result'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
