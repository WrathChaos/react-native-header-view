import React, { Fragment } from "react";
import {
  Linking,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  AppleHeader,
  ModernHeader,
  ClassicHeader,
  GorgeousHeader,
} from "@freakycoder/react-native-header-view";
import Icon from "react-native-dynamic-vector-icons";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {/* <ClassicHeader
          statusBarHidden
          headerTitle="Header"
          rightComponent={
            <TouchableOpacity
              style={{ right: 12 }}
              onPress={() => Linking.openURL("https://github.com/WrathChaos")}
            >
              <Icon name="github" type="AntDesign" size={30} color="purple" />
            </TouchableOpacity>
          }
        /> */}
        {/* <ModernHeader /> */}
        {/* <AppleHeader /> */}
        <GorgeousHeader onChangeText={(text) => console.log(text)} />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
