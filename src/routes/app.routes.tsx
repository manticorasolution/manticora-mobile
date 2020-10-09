import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';

import Scan from '../pages/Scan';
import Register from '../pages/Register';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Scan"
  >
    <App.Screen
      name="Scan"
      component={Scan}
    />
    <App.Screen
      name="Register"
      component={Register}
    />
  </App.Navigator>
);

export default AppRoutes;
