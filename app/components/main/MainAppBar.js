import {Appbar, TouchableRipple} from 'react-native-paper'
import React from "react";
export default  MainAppBar =  (navi) => {
    return (
        <Appbar.Header style={{ elevation: 100 }}   >
            <Appbar.Action icon="menu" onPress={()=>navi.navigation.openDrawer()} />
            <Appbar.Content title="Title"  />
            <Appbar.Action icon="magnify"  />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
    )
}   