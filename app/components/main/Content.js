
import React from "react";
import {View,StyleSheet} from 'react-native';
import { Card, List , TextInput,Button } from "react-native-paper";
import {  } from 'react-native';

export default Content = ({navigation})=> {
    return (
        <View style={styles.center}>
        <Card style={{ height : 220, width : '100%', mapasrgin : 18, justifyContent: 'center'}}>
          <Card.Content style={{ marginLeft: 20, marginRight: 20  }}>
            <TextInput  left={()=> <TextInput.Icon name="account-minus-outline" />} style={{ fontSize : 14, fontFamily: 'Poppins-Regular',height : 40, backgroundColor : 'transparent', marginTop : 12, borderBottomColor : '#af31ac' , borderStyle: 'dashed'}}  placeholder="Depart" />
            <TextInput  style={{ fontSize : 14, height : 40, backgroundColor : 'transparent', marginTop : 12, borderBottomColor : '#af31ac'}}  placeholder="Destination" />
            <Button icon="account-minus-outline" style={{ marginTop : 30 }} mode="contained" onPress={() => console.log('Pressed')}>
                Rechercher
            </Button>
          </Card.Content>
        </Card>
      </View>
  );
}

const styles = StyleSheet.create({
    center: {
       flex : 1,
       flexDirection :'column',
       alignItems : 'center',
       justifyContent : 'center',
       paddingLeft : 20,
       paddingRight : 20
    },
  })