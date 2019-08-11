import { Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import colors from "../colors.style";

export function container(props) {
  const { height, width, backgroundColor, statusBarHidden } = props;
  return {
    width: width || "100%",
    ...Platform.select({
      ios: {
        top: 0,
        ...ifIphoneX(
          {
            height: height || 60
          },
          { height: height || (statusBarHidden ? 50 : 70) }
        )
      },
      android: {
        top: 0,
        height: height || (statusBarHidden ? 60 : 70)
      }
    }),
    // height: height || (Platform === "ios" ? 50 : statusBarHidden ? 90 : 120),
    backgroundColor: backgroundColor || colors.theme.light.white
  };
}

export function innerContainer(statusBarHidden) {
  return {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            top: 12
          },
          { top: statusBarHidden ? 0 : 24 }
        )
      },
      android: {
        top: statusBarHidden ? 12 : 24
      }
    })
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
