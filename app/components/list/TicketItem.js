import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Dash from 'react-native-dash';

const TicketItem = props => {
  const view = () => {
    props.navigation.navigate('Detail');
  };

  return (
    <TouchableRipple
      onPress={() => {}}
      style={{marginBottom: 12, marginLeft: 12, width: '92%'}}>
      <View
        style={{
          borderColor: '#e9e9e9',
          borderWidth: 2,
          justifyContent: 'space-between',
          shadowColor: '#1717171',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          borderRadius: 4,
        }}>
        <View style={{padding: 8, borderRadius: 8, height: 100}}>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{fontWeight: 'bold', fontSize: 12, color: '#1f064f'}}>
                Date de depart
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#1f064f',
                  paddingTop: 12,
                }}>
                {props.date}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#1f064f',
                  paddingTop: 12,
                }}>
                {props.depart}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  color: '#1f064f',
                  textAlign: 'right',
                }}>
                Heure de départ
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'green',
                  paddingTop: 12,
                  textAlign: 'right',
                }}>
                {props.time}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'green',
                  paddingTop: 12,
                  textAlign: 'right',
                }}>
                {props.destination}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e9e9e9',
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
                backgroundColor: '#f1f1f1',
                borderRadius: 150,
              }}
            />
            <Dash
              style={{width: '90%', height: 5, backgroundColor: '#e9e9e9'}}
              dashColor="#f5f5f5"
              dashThickness={1}
              dashGap={5}
            />
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: '#f1f1f1',
                borderRadius: 150,
              }}
            />
          </View>
        </View>
        <View
          style={{
            padding: 8,
            borderRadius: 8,
            height: 48,
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#1f064f'}}>
                PAYER :{' '}
              </Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'orange'}}>
                {props.price} Ar{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default TicketItem;

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
    shadowColor: '#acacac',
  },
});
