import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const osMessage = Platform.select({
  ios: 'You\'re running this App on iOS',
  android:
    'You\'re running this App on Android',
});

type Props = {};
export default class Welcome extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Welcome to FreshCancan</Text>
            <Text style={styles.information}>Soon, this App will make your life a lot simpler :)</Text>
            <Text style={styles.information}>FreshCancan is a code name. The real name is way cooler.</Text>
            <Text style={styles.osMessage}>{osMessage}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
    alignItems: 'center',
  },

  welcomeContainer: {
    backgroundColor: 'rgba(0,0,0,1)',
    marginTop: '30%',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    margin: 10,
  },

  information: {
    textAlign: 'center',
    color: '#rgba(255,255,255,1)',
    marginBottom: 5,
  },

  osMessage: {
    textAlign: 'center',
    color: '#rgba(255,255,255,1)',
    marginTop: 20,
  },
});
