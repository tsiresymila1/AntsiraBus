import React, { useEffect,useState, } from "react";
import { View,StyleSheet,StatusBar,Image, Text } from "react-native";
import { ScaledSheet,s, vs, ms, mvs } from 'react-native-size-matters';
import {TextInput,Button, TextInputMask} from 'react-native-paper';



const LoginScreen = ({ navigation }) => {

    const [visible, setvisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toggleVisibility = () => {
        setvisible(!visible);
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
                        <Text style={{ textAlign: 'center', color: "#1f064f", fontWeight:'bold', fontSize: 18, textTransform: 'uppercase'}}>Identifier - Vous</Text>
                    </View>
                    <View style={{ height: 40, marginLeft: 140, marginRight: 140, marginTop: 18}}>
                        <TextInput 
                            left={<TextInput.Icon name={"phone"}  color="green" />}
                            mode={'flat'} 
                            selectionColor={"transparent"} 
                            underlineColor={"transparent"} 
                            value={username} 
                            style={{...textInputprops.styles, flex:1, height:36, borderRadius: 4, paddingLeft: 0 , paddingRight: 0, fontFamily:'Poppins-Regular'}}  
                            showSoftInputOnFocus={false} 
                            onChange={setUsername}
                            placeholder={"Numero téléphone"} 
                            placeholderTextColor="#acacac"
                            />
                    </View>
                    <View style={{ height: 40, marginLeft: 140, marginRight: 140, marginTop: 18}}>
                        <TextInput 
                            left={<TextInput.Icon name={"lock"} color="#1f064f" />}
                            mode={'flat'} 
                            selectionColor={"transparent"} 
                            underlineColor={"transparent"} 
                            value={password} 
                            style={{...textInputprops.styles, flex:1, height:36, borderRadius: 4, paddingLeft: 0 , paddingRight: 0, fontFamily:'Poppins-Regular'}}  
                            showSoftInputOnFocus={false} 
                            placeholder={"Mot de passe"} 
                            placeholderTextColor="#acacac"
                            secureTextEntry={ visible? false : true}
                            onChange={setPassword}
                            right={<TextInput.Icon name={ visible ? "eye-off" :"eye"} onPress={()=>toggleVisibility()} />}
                            />
                    </View>
                    <View style={{ marginLeft: 140, marginRight: 140, marginTop: 18}}>
                        <Button icon={"login"} style={{ marginTop : 12, height: 40, backgroundColor:"#1f064f" }} mode="contained" onPress={() =>{
                            navigation.navigate('Reservation',{withAnimation:true})
                        }}>
                            Se Connecter
                        </Button>
                    </View>
                    <View style={{ marginLeft: 140, marginRight: 140, marginTop: 2}}>
                        <Button style={{ marginTop : 12, height: 40 }} mode="text" onPress={() =>{
                            navigation.navigate('ForgotPassword',{withAnimation:true}) 
                        }}>
                            Mot de passe oublié
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
export default LoginScreen;