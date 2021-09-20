import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from './../components/list/ListeItem';

const ListScreen = ({navigation}) => {
  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: '#1a237e',
          borderBottomStartRadius: 12,
          borderBottomEndRadius: 12,
          paddingBottom: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingStart: 10,
            paddingEnd: 10,
          }}>
          <View style={{padding: 12}}>
            <Text style={styles.text}>Antananarivo</Text>
            <Text style={styles.text}>TNR</Text>
            <Text style={styles.text}>28/08/2021</Text>
          </View>
          <View style={{height: 'auto', justifyContent: 'center'}}>
            <Icon name={'exchange'} size={28} color="green" />
          </View>
          <View style={{padding: 12}}>
            <Text style={{...styles.text, textAlign: 'right'}}>Antsirabe</Text>
            <Text style={{...styles.text, textAlign: 'right'}}>BIRA</Text>
            <Text style={{...styles.text, textAlign: 'right'}}>28/08/2021</Text>
          </View>
        </View>
      </View>
      <View
        style={{marginTop: 18, height: 'auto', paddingEnd: 8, paddingStart: 7}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={d => (
            <ListItem
              key={d}
              time="15:00"
              totalplace="13"
              dispo="12"
              price="13000"
              navigation={navigation}
            />
          )}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {color: 'white', fontFamily: 'Poppins-Regular', fontSize: 13},
});

export default ListScreen;
