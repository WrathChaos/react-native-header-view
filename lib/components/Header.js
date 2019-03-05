import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { ifIPhoneXHeader } from "./shared.style";
// Styles
import _styles, {
  container,
  _shadowStyle,
  innerContainer,
  _leftComponentStyle,
  _rightComponentStyle
} from "./Header.style";
import colors from "./colors.style";
const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30
};

const Header = props => {
  const {
    styles,
    hitSlops,
    shadowStyle,
    headerTitle,
    shadowColor,
    leftComponent,
    rightComponent,
    centerComponent,
    statusBarHidden,
    leftComponentStyle,
    rightComponentStyle,
    leftComponentDisable,
    leftComponentOnPress,
    centerComponentStyle,
    rightComponentDisable,
    rightComponentOnPress
  } = props;
  return (
    <View
      style={[
        styles || container(props),
        ifIPhoneXHeader,
        shadowStyle || _shadowStyle(shadowColor)
      ]}
    >
      <View style={[innerContainer(statusBarHidden)]}>
        {leftComponent || (
          <TouchableOpacity
            style={
              leftComponentStyle || _leftComponentStyle(leftComponentDisable)
            }
            hitSlop={hitSlops || hitSlop}
            onPress={leftComponentOnPress}
          >
            <Icon
              name="ios-arrow-back"
              type="Ionicons"
              size={30}
              color={colors.theme.light.primary}
            />
          </TouchableOpacity>
        )}
        {centerComponent || (
          <Text style={[centerComponentStyle || _styles.centerComponentStyle]}>
            {headerTitle}
          </Text>
        )}
        {rightComponent || (
          <TouchableOpacity
            style={
              rightComponentStyle || _rightComponentStyle(rightComponentDisable)
            }
            hitSlop={hitSlops || hitSlop}
            onPress={rightComponentOnPress}
          >
            <Icon
              name="ios-menu"
              type="ionicon"
              size={30}
              color={colors.theme.light.primaryWhite}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
