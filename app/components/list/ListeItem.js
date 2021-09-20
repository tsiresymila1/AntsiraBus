import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableRipple, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';

const ListItem = props => {
  const view = () => {
    props.navigation.navigate('Detail');
  };

  return (
    <TouchableRipple
      onPress={view.bind(this)}
      style={{
        marginBottom: 10,
      }}>
      <>
        <LinearGradient
          colors={['#1f064f', '#1f064f', '#1f064f', '#1f064f']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <View style={{padding: 8, borderRadius: 8, height: 80}}>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 12, color: '#f5f5f5'}}>
                  Heure de depart
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: '#f1f1f1',
                    paddingTop: 12,
                  }}>
                  {props.time}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 12,
                    color: '#f1f1f1',
                    textAlign: 'right',
                  }}>
                  Place disponible
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'green',
                    paddingTop: 12,
                    textAlign: 'right',
                  }}>
                  {props.dispo}/{props.totalplace}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#acaca',
            zIndex: 9999,
          }}>
          <View
            style={{
              width: '106%',
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: '#f5f5f5',
                borderRadius: 150,
              }}
            />
            {/*<Dash*/}
            {/*  style={{width: '91%', height: 5, backgroundColor: '#1f064f'}}*/}
            {/*  dashColor="#f5f5f5"*/}
            {/*  dashThickness={1}*/}
            {/*  dashGap={5}*/}
            {/*/>*/}
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: '#f5f5f5',
                borderRadius: 150,
              }}
            />
          </View>
        </View>
        <LinearGradient
          colors={['#1f064f', '#1f064f', '#1f064f', '#1f064f']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.linearGradient}>
          <View
            style={{
              padding: 8,
              borderRadius: 8,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'orange'}}>
                  {props.price} Ar{' '}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </>
    </TouchableRipple>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    justifyContent: 'space-between',
    borderRadius: 5,
    margin: 0,
    padding: 0,
  },
});
