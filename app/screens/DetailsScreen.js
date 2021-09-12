import React,{useState} from "react";
import { View,Text, StyleSheet, FlatList} from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import {Checkbox,TouchableRipple,Button} from 'react-native-paper';
import SeatItem from './../components/list/SeatItem';


const DetailsScreen =  ({mainnav}) => {

    const [mySeat, setMySeat] = useState([])
    const [paie, setPaie] = useState(15000)

    const changeState = (state,index)=>{
        switch(state){
            case 'void':
               var newSeat = mySeat.filter((item)=>{
                    return item !== index;
                },[]);
                newSeat.push(index);
                setMySeat(newSeat);
                break;
            case 'selected':
                var newSeat = mySeat.filter((item)=>{
                    return item !== index;
                })
                setMySeat(newSeat);
                console.log(newSeat);
                break;

        }
        console.log(state,index);
    }
    const validateSelection = () => {
        mainnav.navigate('Login',{withAnimation:true})
    }

    const seats = [
        {
            index : 1 ,
            state : 'void'
        },
        {
            index : 2 ,
            state : 'void'
        },
        {
            index : 3 ,
            state : 'void'
        },
        {
            index : 4 ,
            state : 'void'
        },
        {
            index : 5 ,
            state : 'void'
        },
        {
            index : 6 ,
            state : 'void'
        },
        {
            index : 7 ,
            state : 'void'
        },
        {
            index : 8 ,
            state : 'void'
        },
        {
            index : 9 ,
            state : 'void'
        },
        {
            index : 10 ,
            state : 'void'
        },
        {
            index : 11 ,
            state : 'reserved'
        },
        {
            index : 12 ,
            state : 'void'
        }
    ]
    return (
      <>
       <View style={{ backgroundColor: "#1a237e", borderBottomStartRadius: 12, borderBottomEndRadius: 12, paddingBottom: 12}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', paddingStart: 10, paddingEnd: 10}}>
                <View style={{ padding: 12, justifyContent:'center'}}>
                    <Text style={{...styles.text,textAlign:'center'}}>TNR ----- <Icon name={"car"}></Icon>----- BIRA</Text>
                    <Text style={{...styles.text,textAlign:'center'}}>12 Septembre 2021 - 15:00</Text>
                </View>
            </View>
       </View>
       <View style={{ marginTop: 18, height: 'auto', paddingEnd: 8, paddingStart:7,flexDirection: 'column', flex: 1}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly' }}>
                <View  style={{flexDirection:'row'}} ><Checkbox color="green" status={'checked'}onPress={() => {}}/><Text style={{ marginTop:8 }}>Disponible </Text></View>
                <View  style={{flexDirection:'row'}} ><Checkbox color="grey" status={'checked'}onPress={() => {}}/><Text style={{ marginTop:8 }}>Indisponible </Text></View>
                <View  style={{flexDirection:'row'}} ><Checkbox color="#1f064f" status={'checked'}onPress={() => {}}/><Text style={{ marginTop:8 }}>Selectionné </Text></View>
            </View>
            <View style={{flexDirection: 'column', padding: 18, justifyContent:'center', alignItems:'center'}}>
                <FlatList key={'seat-key'}
                    data={seats }
                    renderItem={({item}) => <SeatItem isDriver={item.index === 1 }  key={item.index}  notshowing={item.index === 2} indice={item.index} onChangeState={(state)=>changeState(state,item.index)} state={item.state} />}
                    numColumns={3}/>
            </View>
        </View>
        <View style={{ height: 60, paddingEnd: 8, paddingStart: 8, paddingTop:8, backgroundColor:"#d0d0d0"}}>
            <View style={{flexDirection:'row', justifyContent:"space-between",}}>
                <View style={{ flex: 1}}>
                    <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                        <Text>Places  : </Text> 
                        <Text style={{ fontWeight: 'bold'}}> {mySeat.join(',')} </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                        <Text>Prix  : </Text>
                        <Text style={{ fontWeight: 'bold'}}> AR {paie * mySeat.length}</Text> 
                    </View>
                </View>
                <View style={{ width:160, justifyContent: "center", alignItems: 'flex-end' }}>
                    <Button  disabled={mySeat.length === 0 }  icon={"arrow-right-bold"} style={{ marginTop : 0, backgroundColor:"#1f064f" }} mode="contained" onPress={() => validateSelection()}>
                        Suivant
                    </Button>
                </View>
            </View>
        </View>
      </>
      
    );
};

const styles = StyleSheet.create({
    text : { color:"white", fontFamily:'Poppins-Regular'}
})

export default DetailsScreen;
