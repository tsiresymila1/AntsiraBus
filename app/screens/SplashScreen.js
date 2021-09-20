import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
// import AnimatedLoader from "react-native-animated-loader";
import AnimatedLottieView from 'lottie-react-native';
import {ScaledSheet, s, vs, ms, mvs} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SplashScreen = ({navigation}) => {
  const [visible, setvisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main', {withAnimation: true});
    }, 3000);
  });

  return (
    <>
      <StatusBar backgroundColor={'#f5f5f5f5'} />
      <View style={styles.center}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Image
            style={imagesStyles.logo}
            source={require('../assets/images/logo.png')}
          />
          <AnimatedLottieView
            style={imagesStyles.loader}
            source={require('../assets/loader.json')}
            autoPlay={true}
            loop
          />
        </View>
        <View style={imagesStyles.logoContainer}>
          <Image
            style={imagesStyles.logoParteaire}
            source={require('../assets/images/digitalent.png')}
          />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
const imagesStyles = ScaledSheet.create({
  logo: {
    height: '180@vs',
    resizeMode: 'contain',
  },
  logoContainer: {
    flexDirection: 'column',
    height: '100@s',
  },
  logoParteaire: {
    width: '200@s',
    height: '100@vs',
    resizeMode: 'contain',
  },
  loader: {
    width: '80@s',
    opacity: 1,
    // marginTop : '100@vs'
  },
});
const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 400,
    height: 100,
    opacity: 1,
  },
});
