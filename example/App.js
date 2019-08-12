import React, { Fragment } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { ClassicHeader, ModernHeader } from "react-native-header-view";

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
