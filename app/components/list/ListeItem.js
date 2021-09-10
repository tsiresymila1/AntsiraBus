import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableRipple,Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'


const ListItem = () => {
    return (
        <TouchableRipple onPress={()=>{}}>
            <>
            <LinearGradient
                colors={['#0d2453' , '#dc643e','#a99197','#9f3f61', '#5f4a6d','#0d2453'  ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.linearGradient}>
                <View style={{ padding: 8 , borderRadius: 8, height:68}}>
                    <View style={{ justifyContent: 'space-between', flex: 1 , flexDirection: 'row'}}>
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 12, color: "#e8e8e8" }} >Heure de depart</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 14 , color: "#f1f1f1", paddingTop: 12 }}>18:00</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 12, color: "#f1f1f1" , textAlign: 'right'}} >Place disponible</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18,color:'green' , paddingTop: 12, textAlign: 'right'}}>13/13</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <LinearGradient
                 colors={['#0d2453' , '#dc643e','#a99197','#9f3f61', '#5f4a6d','#0d2453'  ]}
                 start={{ x: 0, y: 0.5 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0,0.2, 0.4,0.6,0.8,0.9]}
                style={styles.linearGradient}>
                <View style={{ padding: 8 , borderRadius: 8 , height:48, alignItems: 'center', justifyContent:'center'}}>
                    <View style={{ justifyContent: 'space-between', flex: 1 , flexDirection: 'row'}}>
                        <View >
                            <Text style={{fontWeight: 'bold', fontSize: 18, color: "orange", }} >15000 Ar </Text>
                        </View>
                        <TouchableOpacity>
                            <View style={{ padding: 8 , backgroundColor: "#16a5f7", borderRadius:4, marginEnd: 8, marginStart: 8 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 12, color: "#f1f1f1", }} >Details </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            </>
    </TouchableRipple>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      justifyContent: 'space-between',
      borderRadius: 5
    },
})