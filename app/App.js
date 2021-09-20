/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
const Realm = require('realm');
import {Provider as MaterialProvider, DefaultTheme} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as DefaultTheme2,
} from '@react-navigation/native';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet, SafeAreaView} from 'react-native';

import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';
import Login from './screens/LoginScreen';
import ReservationScreen from './screens/ReservationScreen';
import ForgotPassswordScreen from './screens/ForgotPassswrodScreeen';
import CodeScreen from './screens/CodeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1a237e',
    accent: '#1a237e',
  },
};

const theme2 = {
  ...DefaultTheme2,
  colors: {
    ...DefaultTheme2.colors,
    primary: '#1a237e',
    accent: '#1a237e',
  },
};

let oldRender = Text.render;
Text.render = function (...args) {
  let origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [{fontFamily: 'Poppins-Regular'}, origin.props.style],
  });
};

const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const App = () => {
  return (
    <>
      <NavigationContainer theme={theme2}>
        <MaterialProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={horizontalAnimation}>
            <Stack.Screen
              name="Splash"
              options={{headerShown: false}}
              component={SplashScreen}
            />
            <Stack.Screen
              name="Main"
              options={{headerShown: false}}
              component={MainScreen}
            />
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={Login}
            />
            <Stack.Screen
              name="ForgotPassword"
              options={{headerShown: false}}
              component={ForgotPassswordScreen}
            />
            <Stack.Screen
              name="Reservation"
              options={{headerShown: false}}
              component={ReservationScreen}
            />
            <Stack.Screen
              name="Code"
              options={{headerShown: false}}
              component={CodeScreen}
            />
            <Stack.Screen
              name="ResetPassword"
              options={{headerShown: false}}
              component={ResetPasswordScreen}
            />
            <Stack.Screen
              name="About"
              options={{headerShown: false}}
              component={AboutScreen}
            />
          </Stack.Navigator>
        </MaterialProvider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
