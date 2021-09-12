import {Appbar} from 'react-native-paper'
import React from "react";
export default  SelectAppBar =  (navi) => {
    return (
        <Appbar.Header style={{ elevation: 0 }}  >
            <Appbar.Action icon="menu" onPress={()=>navi.navigation.openDrawer()} />
            <Appbar.Content title="Selection place"  />
        </Appbar.Header>
    )
}