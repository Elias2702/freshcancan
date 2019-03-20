import React, {Component} from 'react';
import Welcome from './Screens/Welcome';
import HomeMap from './Screens/HomeMap';
import Tutorial1 from './Screens/Tutorial1';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: Welcome,
    Tutorial1 : Tutorial1,
    Map: HomeMap,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(0,0,0,1)',
      },
      headerTintColor: 'rgba(34,167,240,1)',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigator extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
};
