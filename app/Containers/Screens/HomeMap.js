import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class HomeMap extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '');
    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.blueHighlight}>Rome wasn't built in a day</Text>
            <Text style={styles.welcome}>Work in progress</Text>
            <Text style={styles.information}>Here, your map</Text>
          </View>
          <Button
            title="Back to Login"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Text style={styles.bottomInformation}>There, your search bar</Text>
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
    marginBottom: '10%',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    margin: 10,
  },

  information: {
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    marginBottom: 5,
  },

  bottomInformation: {
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    marginTop: 120,
  },

  blueHighlight: {
    textAlign: 'center',
    color: 'rgba(34,167,240,1)',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },

});
