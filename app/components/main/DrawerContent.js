
import React from "react";
import {View,Image,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default DrawerContent = ()=> {
    return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start", flex: 1 }}>
            <View style={{ width: '100%', height: 180, backgroundColor: '#1a237e', padding: 10 }}>
                <Image style={{ width: '100%', height: 120, resizeMode: 'contain' }} source={require('../../assets/images/logo.png')}></Image>
                <Text style={{ textAlign: 'center', color: Colors.white }}>Resrvation</Text>
            </View>
            <Text>Hello</Text>
        </View>
        <View style={{ height: 60, justifyContent: "flex-end" }}>
            <Image style={{ width: "100%", height: 60, resizeMode: 'contain' }} source={require('../../assets/images/digitalent.png')}></Image>
        </View>
    </View>
  );
}