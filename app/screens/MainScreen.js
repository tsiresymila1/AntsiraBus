import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import MainAppBar from  "../components/main/MainAppBar";
import DrawerContent from "../components/main/DrawerContent";
import Content from './../components/main/Content';


const MainScreen =  ({navigation}) => {
    return (
      <>
        <StatusBar translucent={false}  backgroundColor={'#1a237ef5'}  ></StatusBar>
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen options={{ header: MainAppBar }} name="Content" component={Content} />
        </Drawer.Navigator>
      </>
      
    );
};

export default MainScreen;

