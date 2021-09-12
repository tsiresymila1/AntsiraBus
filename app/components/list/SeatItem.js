import React,{useState} from "react";
import IconMat  from "react-native-vector-icons/MaterialCommunityIcons" ;
import {Checkbox,TouchableRipple,Button} from 'react-native-paper';
import { Text, View } from 'react-native';

 const SeatItem = ({state="void", onChangeState, indice=1, isDriver=false, notshowing=false}) => {
    const [selected, setSelected] = useState(state);

    const toggleState = () =>{
        var currentState = selected;
        if(!isDriver){
            switch(selected){
                case "selected" : 
                    setSelected('void');
                    break;
                case "void": 
                    setSelected('selected');
                    break;
                default :
                    break;
            }
            onChangeState(currentState);
        }   
    }
    return (
        <View style={{ width: 80, height:60, justifyContent: 'center', alignItems:'center', margin: 8}} key={indice}>
            <TouchableRipple  onPress={()=>toggleState()}>
               {notshowing ? 
               <View></View> : 
               <View>
                    <IconMat name={ isDriver ? "ferris-wheel" : "seat"} color={ isDriver ? 'black' : selected === "selected" ? '#1f064f' : selected =="reserved" ? "grey" : 'green' } size={50} ></IconMat> 
                    <Text style={{ textAlign: 'center', fontSize:15, fontWeight: '900', color:selected =='selected'? '#1f064f' : selected =='reserved'? "grey" : "green" }}>{indice}</Text>
                </View>}
            </TouchableRipple>
        </View>
    );
}

export default SeatItem;