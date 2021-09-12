import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StatusBar, View, FlatList } from 'react-native';
import {TextInput} from 'react-native-paper';
import { useState } from 'react';
import SeatItem from './../components/list/SeatItem';
import TicketItem from './../components/list/TicketItem';


const ReservationScreen = ({navigation}) => {

    const [search, setsearch] = useState('');

    const histories = [
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
        <StatusBar  backgroundColor={'#1a237ef5'}></StatusBar>
        <Appbar.Header>
        <Appbar.BackAction onPress={() => {
            navigation.navigate('Content',{withAnimation: true});
        }} />
        <Appbar.Content title="Mes Réservation" titleStyle={{ fontSize: 18, alignItems: 'center' }} />
        </Appbar.Header>
        <View style={{flex: 1 , flexDirection : 'column', width: "100%", padding:0, margin:0}}>
            <TextInput 
                left={<TextInput.Icon name={"magnify"} color="#1f064f" />}
                mode={'flat'} 
                selectionColor={"transparent"} 
                underlineColor={"transparent"} 
                value={search} 
                style={{height:36, borderRadius: 4, paddingLeft: 0 , paddingRight: 0, fontFamily:'Poppins-Regular', marginLeft: 22, marginRight:22, marginTop: 15}}  
                showSoftInputOnFocus={false} 
                onChange={setsearch}
                placeholder={"Recherche"} 
                placeholderTextColor="#acacac"
            />
            <View style={{flexDirection: 'column', padding: 8, justifyContent:'center', alignItems:'center', marginBottom:50}}>
                <FlatList key={'seat-key'}
                    data={histories }
                    renderItem={({item}) =>  <TicketItem depart="Antananarivo" destination="Antsirabe" date="11 Séptembre 2021" time="15:00"  price="13000" navigation={navigation}  key={item.index} />}/>
            </View>
        </View>
    </>
    )
   
};

export default ReservationScreen;