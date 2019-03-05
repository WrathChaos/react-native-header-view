import { Platform } from "react-native";
import colors from "./colors.style";

export function container(props) {
  const {
    height,
    width,
    backgroundColor,
    bottomStick,
    statusBarHidden
  } = props;
  return {
    width: width || "100%",
    top: Platform.OS === "ios" ? 0 : statusBarHidden ? -24 : -32,
    bottom: bottomStick ? 0 : null,
    height: height || (Platform === "ios" ? 50 : statusBarHidden ? 70 : 100),
    backgroundColor: backgroundColor || colors.theme.light.white
  };
}

export function innerContainer(statusBarHidden) {
  return {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    top: Platform === "ios" ? 8 : statusBarHidden ? 24 : 54
  };
}

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 7 },
        shadowColor: shadowColor || colors.theme.light.shadowColor
      },
      android: {
        elevation: 6
      }
    })
  };
}

export function _leftComponentStyle(leftComponentDisable) {
  return {
    marginLeft: 16,
    opacity: leftComponentDisable ? 0 : 1
  };
}

export function _rightComponentStyle(rightComponentDisable) {
  return {
    marginRight: 16,
    opacity: rightComponentDisable ? 0 : 1
  };
}

export default {
  centerComponentStyle: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: colors.theme.light.primary
  }
};
