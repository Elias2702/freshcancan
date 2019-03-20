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
            <Text style={styles.blueHighlight}>Hey {name}!</Text>
            <Text style={styles.welcome}>Find Great Stores</Text>
            <Text style={styles.information}>FreshCancan: what's good around me?</Text>
            <Text style={styles.information}>Using the power of Google Maps, you will be able to search stores that sell great products with the highest of standards:</Text>
            <Text style={styles.blueHighlight}>Fresh   |   Local   |   Ethical</Text>
          </View>
          <Button
            title="Next"
            onPress={() => this.props.navigation.navigate('Map')}
          />
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

  blueHighlight: {
    textAlign: 'center',
    color: 'rgba(34,167,240,1)',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },

  navButton: {
    marginTop: '30%',
  }
});
