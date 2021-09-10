import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import ListItem from './../components/list/ListeItem';


const ListScreen =  ({navigation}) => {
    return (
      <>
       <View style={{ backgroundColor: "#1a237e", borderBottomStartRadius: 12, borderBottomEndRadius: 12, paddingBottom: 12}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-between', paddingStart: 10, paddingEnd: 10}}>
                <View style={{ padding: 12}}>
                    <Text style={styles.text}>Antananarivo</Text>
                    <Text style={styles.text}>TNR</Text>
                    <Text style={styles.text}>28/08/2021</Text>
                </View>
                <View style={{ height: 'auto', justifyContent: 'center'}}>
                    <Icon name={"chevron-right"} size={16} color="#f1f1f1" />
                </View>
                <View style={{ padding: 12}}>
                    <Text style={{...styles.text, textAlign:'right'}}>Antsirabe</Text>
                    <Text style={{...styles.text, textAlign:'right'}}>BIRA</Text>
                    <Text style={{...styles.text, textAlign:'right'}}>28/08/2021</Text>
                </View>
            </View>
       </View>
       
       <View style={{ marginTop: 18, height: 'auto', paddingEnd: 8, paddingStart:7}}>
            <ListItem />
        </View>
      </>
      
    );
};

const styles = StyleSheet.create({
    text : { color:"white", fontFamily:'Poppins-Regular'}
})

export default ListScreen;
