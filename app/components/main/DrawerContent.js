import React from "react";
import {View,Image,Text} from 'react-native';
import { TouchableRipple } from "react-native-paper";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


export default DrawerContent = ({navigation})=> {
    return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start", flex: 1 }}>
            <View style={{ width: '100%', height: 180, backgroundColor: '#1a237e', padding: 10, marginBottom: 8 }}>
                <Image style={{ width: '100%', height: 120, resizeMode: 'contain' }} source={require('../../assets/images/logo.png')}></Image>
                <Text style={{ textAlign: 'center', color: Colors.white, fontFamily:'Poppins-Regular' }}>AntsiraBus</Text>
            </View>
            <TouchableRipple style={{ width: '100%'}} onPress={()=>{}}>      
                <View style={{ height: 54,  padding:12, marginTop:9,flexDirection: "row", flexWrap: "wrap",alignItems:"center" }}>
                    <Icon name="bus" size={24} color="#1a237e" />
                    <Text  style={{ textAlign: 'left', color: "#1a237e", fontFamily:'Poppins-Regular', marginLeft: 16 }}>Mes réservations</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple style={{ width: '100%'}} onPress={()=>{navigation.navigate('List')}}>      
                <View style={{ height: 54,  padding:9, marginTop:9,flexDirection: "row", flexWrap: "wrap", alignItems: 'center'}}>
                    <Icon name="info-circle" size={24} color="#1a237e" />
                    <Text  style={{ textAlign: 'left', color: "#1a237e", fontFamily:'Poppins-Regular', marginLeft: 16 }}>A propos</Text>
                </View>
            </TouchableRipple>
            
        </View>
        <View style={{ height: 60}}>
            <Image style={{ width: "100%", height: 60, resizeMode: 'contain' }} source={require('../../assets/images/digitalent.png')}></Image>
        </View>
    </View>
  );
}