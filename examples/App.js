import React from 'react';
import {
  StyleSheet, 
  Linking,
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import Header from '@freakycoder/react-native-header-view';
import Icon from "react-native-dynamic-vector-icons"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerTitle="Header"
          rightComponent={
            <TouchableOpacity
              style={{ right: 8 }}
              onPress={() => Linking.openURL('https://github.com/WrathChaos')} >
              <Icon name="github" type="AntDesign" size={30} color="purple" />
            </TouchableOpacity>
          }
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
