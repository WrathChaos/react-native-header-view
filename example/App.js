import React, { Fragment } from "react";
import { StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { ClassicHeader, ModernHeader } from "./lib/src/index";
import Icon from "react-native-dynamic-vector-icons";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
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
        <ModernHeader />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
