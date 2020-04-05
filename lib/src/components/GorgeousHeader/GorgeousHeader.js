import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
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
              style={{ height: 40, width: 40, borderRadius: 20 }}
              source={require("../../../local-assets/omid-armin-unsplash.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={{ color: "#2c2305", fontSize: 46, fontWeight: "bold" }}>
            Order
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 5,
              fontWeight: "400",
              color: "#999893",
            }}
          >
            Healthy food can keep you fit.
          </Text>
          <View
            style={{
              padding: 16,
              marginTop: 48,
              borderRadius: 24,
              flexDirection: "row",
              backgroundColor: "#f8f8f8",
            }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../../../local-assets/search.png")}
            />
            <TextInput
              style={{ marginLeft: 12, fontWeight: "500" }}
              placeholder="Search something"
            />
          </View>
        </View>
      </View>
    );
  }
}
