import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './src/Modules/OnBoarding/Splash';
import Call_Logs from './src/Modules/Call_Logs/Call_Logs';
import Dial_pad from './src/Modules/Dail_Pad/Dial_pad';
import OnCall from './src/Modules/OnCall/OnCall';
console.disableYellowBox = true;

const App = createStackNavigator({
  Call_Logs: { screen: Call_Logs },
  Splash: { screen: Splash },
  Dial_pad: { screen: Dial_pad },
  OnCall: { screen: OnCall },
},

  {
    initialRouteName: 'Splash',
  }
);
export default createAppContainer(App);