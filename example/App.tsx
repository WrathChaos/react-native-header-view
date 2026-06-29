import React from "react";
import { StatusBar, SafeAreaView, ScrollView, View } from "react-native";
import {
  GorgeousHeader,
  AppleHeader,
  ModernHeader,
  ClassicHeader,
  ProfileHeader,
  ElegantHeader,
} from "@freakycoder/react-native-header-view";

const Spacer = () => <View style={{ height: 24 }} />;

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <GorgeousHeader onChangeText={(text: string) => console.log(text)} />
        <Spacer />
        <AppleHeader />
        <Spacer />
        <ModernHeader text="Modern Header" />
        <Spacer />
        {/* NOTE: ClassicHeader's title prop is `title`, not `headerTitle`. */}
        <ClassicHeader title="Classic Header" leftComponentOnPress={() => {}} />
        <Spacer />
        <ProfileHeader titleText="Profile" onLeftButtonPress={() => {}} />
        <Spacer />
        <ElegantHeader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
