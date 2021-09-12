import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableRipple, Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';

const TicketItem = props => {
  const view = () => {
    props.navigation.navigate('Detail');
  };

  return (
    <TouchableRipple onPress={()=>{}} style={{marginBottom:12, marginLeft:12 , width: "92%" }}>
      <>
        <LinearGradient
                colors={['#878787' ,'#878787', '#878787','#878787'  ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.linearGradient}>
                <View style={{ padding: 8 , borderRadius: 8, height:100}}>
                    <View style={{ justifyContent: 'space-between', flex: 1 , flexDirection: 'row'}}>
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 12, color: "#292a2b" }} >Date de depart</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 14 , color: "#292a2b", paddingTop: 12 }}>{props.date}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 14 , color: "#292a2b", paddingTop: 12 }}>{props.depart}</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 12, color: "#292a2b" , textAlign: 'right'}} >Heure de départ</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18,color:'green' , paddingTop: 12, textAlign: 'right'}}>{props.time}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 14,color:'green' , paddingTop: 12, textAlign: 'right'}}>{props.destination}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#878787', zIndex: 9999}}>
                <View
                    style={{width: '106%', height: '100%', flexDirection: 'row', justifyContent:"space-between", alignItems: 'center',}}>
                    <View
                    style={{height: 20, width: 20, backgroundColor: '#f5f5f5', borderRadius: 150,}}></View>
                    <Dash style={{width: '90%', height: 5 , backgroundColor:"#878787"}} dashColor="#f5f5f5" dashThickness={1} dashGap={5} />
                    <View
                    style={{height: 20, width: 20, backgroundColor: '#f5f5f5', borderRadius: 150,}}></View>
                </View>
            </View>
            <LinearGradient
                 colors={['#878787' ,'#878787', '#878787','#878787']}
                 start={{ x: 0, y: 0.5 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.linearGradient}>
                <View style={{ padding: 8 , borderRadius: 8 , height:48, alignItems: 'center', justifyContent:'space-between'}}>
                    <View style={{ justifyContent: 'space-between', flex: 1 , flexDirection: 'row',}}>
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 18, color: "#1f064f", }} >PAYER : </Text>
                        </View>
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 18, color: "orange", }} >{props.price} Ar </Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        
      </>
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
  },
});
