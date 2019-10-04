import { Platform } from "react-native";

export const container = (backgroundColor, borderColor) => {
  return {
    borderColor,
    backgroundColor,
    paddingBottom: 8,
    flexDirection: "row",
    marginHorizontal: 16,
    borderBottomWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between"
  };
};

export const _dateTitleStyle = (fontColor, fontSize, fontWeight) => {
  return {
    fontSize,
    fontWeight,
    lineHeight: 18,
    color: fontColor,
    letterSpacing: Platform.OS === "ios" ? -0.08 : undefined
  };
};

export const _largeTitleStyle = (fontColor, fontSize, fontWeight) => {
  return {
    fontSize,
    fontWeight,
    lineHeight: 41,
    color: fontColor,
    letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
  };
};

export default {
  avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2
  },
  avatarContainerStyle: {
    alignSelf: "center",
    justifyContent: "center"
  }
};
