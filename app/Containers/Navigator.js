import React, {Component} from 'react';
import Welcome from './app/Containers/Screens/Welcome';
import HomeMap from './app/Containers/Screens/HomeMap';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: Welcome,
    Map: HomeMap,
  },
  {
    initialRouteName: 'Home',
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
