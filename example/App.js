import React, { Fragment } from "react";
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  AppleHeader,
  ModernHeader,
  ClassicHeader,
} from "@freakycoder/react-native-header-view";
import Icon from "react-native-dynamic-vector-icons";

import GorgeousHeader from "./lib/src/components/GorgeousHeader/GorgeousHeader";

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
        <GorgeousHeader />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
