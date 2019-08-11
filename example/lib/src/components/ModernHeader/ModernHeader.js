import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { leftCompStyle, rightCompStyle } from "./ModernHeader.style";

const HITSLOP = 8;
const hitslopObj = {
  top: HITSLOP,
  left: HITSLOP,
  right: HITSLOP,
  bottom: HITSLOP
};

const ModernHeader = props => {
  const { left, right, text, textStyle } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={leftCompStyle(left)} hitSlop={hitslopObj}>
        <Icon name="ios-arrow-back" type="Ionicons" size={25} color="#bbbabe" />
      </TouchableOpacity>
      <Text style={textStyle}>{text}</Text>
      <TouchableOpacity style={rightCompStyle(right)}>
        <Icon name="heart" type="Entypo" size={25} color="#23c4c1" />
      </TouchableOpacity>
    </View>
  );
};

ModernHeader.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  text: PropTypes.string
};

ModernHeader.defaultProps = {
  left: 16,
  right: 16,
  text: "Header Title",
  textStyle: styles.textStyle
};

export default ModernHeader;
