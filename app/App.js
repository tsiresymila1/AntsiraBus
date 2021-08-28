/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as MaterialProvider,DefaultTheme} from 'react-native-paper';
import { NavigationContainer, DefaultTheme as  DefaultTheme2 } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/native-stack';
import { CardStyleInterpolators, TransitionSpecs,createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet, SafeAreaView
} from 'react-native';

import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';

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

const horizontalAnimation  = {
  cardStyleInterpolator : ({current,layouts})=>{
    return {
      cardStyle : {
        transform : [{
          translateX : current.progress.interpolate({
            inputRange : [0,1],
            outputRange : [layouts.screen.width, 0]
          })
        }]
      }
    }
  }
}


const App = () => {
  return (
      <>
        <NavigationContainer theme={theme2}>
          <MaterialProvider theme={theme}>
            <Stack.Navigator initialRouteName="Splash" screenOptions={horizontalAnimation}>
                <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
                <Stack.Screen name="Main" options={{headerShown: false}}  component={MainScreen} />
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
})

export default App;