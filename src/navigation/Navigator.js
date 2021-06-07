import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';

const Drawer = createDrawerNavigator();

const  AppNavigator = ()  => {

    return(

        <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        
      </Drawer.Navigator>

    </NavigationContainer>

    );
}

export default AppNavigator;
