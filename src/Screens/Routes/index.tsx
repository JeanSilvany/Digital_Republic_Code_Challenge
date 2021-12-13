import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Home';
import Splash from '../Splash';
import Internal from '../Internal';
import FinalScreen from '../FinalScreen';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Internal"
        component={Internal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinalScreen"
        component={FinalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
