import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Linking,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Header from "@freakycoder/react-native-header-view";
import Icon from "react-native-dynamic-vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar hidden />
          <Header
            statusBarHidden
            headerTitle="Header"
            rightComponent={
              <TouchableOpacity
                style={{ right: 8 }}
                onPress={() => Linking.openURL("https://github.com/WrathChaos")}
              >
                <Icon name="github" type="AntDesign" size={30} color="purple" />
              </TouchableOpacity>
            }
          />
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Open up App.js to start working on your app!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    textAlign: "center"
  }
});
