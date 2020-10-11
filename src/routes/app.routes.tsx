import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import Main from '../pages/Main';
import Scan from '../pages/Scan';
import Register from '../pages/Register';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Main">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={Main}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Scan"
        component={Scan}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Register}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
