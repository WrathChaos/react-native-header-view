import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

const menuImg = require("../../../local-assets/menu.png");

export default class GorgeousHeader extends Component {
  render() {
    return (
      <View style={{ margin: 32 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: "auto" }} onPress={() => {}}>
            <Image source={menuImg} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: "auto" }} onPress={() => {}}>
            <Image
              source={require("../../../local-assets/omid-armin-unsplash.jpg")}
              style={{ height: 30, width: 30, borderRadius: 16 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={{ color: "#2c2305", fontSize: 46, fontWeight: "bold" }}>
            Order
          </Text>
          <Text style={{ fontSize: 14, color: "#999893" }}>
            Healthy food can keep you fit.
          </Text>
        </View>
      </View>
    );
  }
}
