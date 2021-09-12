import React, { useEffect,useState, } from "react";
import { View,StyleSheet,StatusBar,Image, Text } from "react-native";
import { ScaledSheet,s, vs, ms, mvs } from 'react-native-size-matters';
import {TextInput,Button, TextInputMask} from 'react-native-paper';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';



const CodeScreen = ({ navigation }) => {

    const [code, setCode] = useState('');

    const _checkCode = (code) => {
        console.log(code);
    }

    return (
        <>
            <StatusBar  backgroundColor={'#f5f5f5f5'}  ></StatusBar>
            <View style={styles.center}>
                <View style={{ flexDirection : 'column', justifyContent : 'center', flex:1 }}>
                    <View style={{ height: 100 , marginBottom: 12}}>
                        <Image style={imagesStyles.logo} source={ require('../assets/images/logo.png')}></Image>
                    </View>
                    <View style={{ height: 40, marginLeft: 140, marginRight: 140, justifyContent: "center"}}>
                        <Text style={{ textAlign: 'center', color: "#4d0482", fontWeight:'bold', fontSize: 18, textTransform: 'uppercase'}}>Code de validation</Text>
                    </View>
                    <View style={{ height: 40, marginLeft: 140, marginRight: 140, marginTop: 18, justifyContent: 'center', alignItems: 'center'}}>
                        <SmoothPinCodeInput
                            cellStyle={{
                                borderBottomWidth: 2,
                                margin: 8,
                                borderColor: 'gray',
                              }}
                            value={code}
                            onTextChange={setCode}
                            onFulfill={_checkCode}
                         />
                    </View>
                    <View style={{ marginLeft: 140, marginRight: 140, marginTop: 18}}>
                        <Button icon={"send"} style={{ marginTop : 12, height: 40, backgroundColor:"#1f064f" }} mode="contained" onPress={() =>{
                            navigation.navigate('ResetPassword',{withAnimation:true})
                        }}>
                            Valider 
                        </Button>
                    </View>
                    <View style={{ marginLeft: 140, marginRight: 140, marginTop: 2}}>
                        <Button style={{ marginTop : 12, height: 40 }} mode="text" onPress={() =>{
                             navigation.navigate('Login',{withAnimation:true})
                        }}>
                            Se connecter
                        </Button>
                    </View>
                </View>
                <View style={imagesStyles.logoContainer}>
                    <Image style={imagesStyles.logoParteaire} source={ require('../assets/images/digitalent.png')}></Image>
                </View>
            </View>
        </>
    );
  };

  
  const imagesStyles = ScaledSheet.create({
      logo : {
          height : '120@vs',
          resizeMode: 'contain'
    },
    logoContainer : {
        flexDirection: 'column', 
        height:'80@s'
    },
    logoParteaire : {
        width: '100@s',
        height: '80@vs',
        resizeMode: 'contain'
    },
    loader : {
        width : '80@s',
        opacity: 1,
    }
})


const textInputprops = {
  style : {
    backgroundColor : "#868e96",
    fontSize : 14, 
    fontFamily: 'Poppins-Regular',
    marginTop : 6, 
    marginBottom : 6, 
  },
  placeholder: "Départ",
  placeholderTextColor: "#acacac"
}

const styles = StyleSheet.create({
    center: {
        flex : 1,
        flexDirection :'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    lottie: {
        width: 400,
        height: 100,
        opacity: 1,
    }
})
export default CodeScreen;