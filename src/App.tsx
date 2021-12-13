import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './Screens/Routes';

import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
