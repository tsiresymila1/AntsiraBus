import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import MainAppBar from  "../components/main/MainAppBar";
import SelectAppBar from './../components/main/SelectAppBar';
import DrawerContent from "../components/main/DrawerContent";
import Content from './../components/main/Content';

import ListScreen from "./ListScreen";
import DetailsScreen from './DetailsScreen';

const MainScreen =  ({navigation}) => {
    return (
      <>
        <StatusBar  translucent={false}  backgroundColor={'#1a237ef5'}  ></StatusBar>
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen options={{ header: (drawerprops) =>(<MainAppBar {...drawerprops}  logged={true} />) }} name="Content" component={Content} />
            <Drawer.Screen options={{ header: (drawerprops) =>(<MainAppBar {...drawerprops}  logged={true} />) }} name="List" component={ListScreen} />
            <Drawer.Screen options={{ header: SelectAppBar }} name="Detail" component={() => <DetailsScreen mainnav={navigation} />} />
        </Drawer.Navigator>
      </>
      
    );
};

export default MainScreen;

