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
  const {
    left,
    right,
    text,
    textStyle,
    leftIconName,
    leftIconType,
    leftIconSize,
    leftIconColor,
    rightIconName,
    rightIconType,
    rightIconSize,
    rightIconColor,
    leftIconComponent,
    rightIconComponent,
    leftIconOnPress,
    rightIconOnPress
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={leftCompStyle(left)}
        hitSlop={hitslopObj}
        onPress={leftIconOnPress}
      >
        {leftIconComponent || (
          <Icon
            name={leftIconName}
            type={leftIconType}
            size={leftIconSize}
            color={leftIconColor}
          />
        )}
      </TouchableOpacity>
      <Text style={textStyle}>{text}</Text>
      <TouchableOpacity
        style={rightCompStyle(right)}
        onPress={rightIconOnPress}
      >
        {rightIconComponent || (
          <Icon
            name={rightIconName}
            type={rightIconType}
            size={rightIconSize}
            color={rightIconColor}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

ModernHeader.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  text: PropTypes.string,
  leftIconName: PropTypes.string,
  leftIconType: PropTypes.string,
  leftIconSize: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIconName: PropTypes.string,
  rightIconType: PropTypes.string,
  rightIconSize: PropTypes.string,
  rightIconColor: PropTypes.string
};

ModernHeader.defaultProps = {
  left: 16,
  right: 16,
  text: "Header Title",
  textStyle: styles.textStyle,
  leftIconName: "ios-arrow-back",
  leftIconType: "Ionicons",
  leftIconSize: 25,
  leftIconColor: "#bbbabe",
  rightIconName: "heart",
  rightIconType: "Entypo",
  rightIconSize: 25,
  rightIconColor: "#23c4c1"
};

export default ModernHeader;
