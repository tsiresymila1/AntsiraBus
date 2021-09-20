import {Appbar} from 'react-native-paper';
import React from 'react';

const MainAppBar = props => {
  return (
    <Appbar.Header style={{elevation: 0}}>
      <Appbar.Action
        icon="menu"
        onPress={() => props.navigation.openDrawer()}
      />
      <Appbar.Content title="Recherche" />
      {props.logged ? <Appbar.Action icon="logout" onPress={() => {}} /> : null}
    </Appbar.Header>
  );
};

export default MainAppBar;
