import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {ScaledSheet, s, vs, ms, mvs} from 'react-native-size-matters';
import {Appbar} from 'react-native-paper';

const AboutScreen = ({navigation}) => {
  const [visible, setvisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleVisibility = () => {
    setvisible(!visible);
  };

  return (
    <>
      <StatusBar backgroundColor={'#1a237ef5'} />
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate('Content', {withAnimation: true});
          }}
        />
        <Appbar.Content
          title="A propos"
          titleStyle={{fontSize: 18, alignItems: 'center'}}
        />
      </Appbar.Header>
      <View style={styles.center}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
          }}>
          <View style={{height: 100, marginBottom: 12}}>
            <Image
              style={imagesStyles.logo}
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View
            style={{
              height: 40,
              marginLeft: 140,
              marginRight: 140,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#1f064f',
                fontWeight: 'bold',
                fontSize: 18,
                textTransform: 'uppercase',
              }}>
              Déscription
            </Text>
          </View>
          <View
            style={{
              height: 40,
              marginLeft: 140,
              marginRight: 140,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'justify', fontSize: 14}}>
              Application de réservation des places en ligne. Permet de choisir
              des places parmis les disponibles
            </Text>
          </View>
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

const imagesStyles = ScaledSheet.create({
  logo: {
    height: '120@vs',
    resizeMode: 'contain',
  },
  logoContainer: {
    flexDirection: 'column',
    height: '80@s',
  },
  logoParteaire: {
    width: '100@s',
    height: '80@vs',
    resizeMode: 'contain',
  },
  loader: {
    width: '80@s',
    opacity: 1,
  },
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  lottie: {
    width: 400,
    height: 100,
    opacity: 1,
  },
});
export default AboutScreen;
