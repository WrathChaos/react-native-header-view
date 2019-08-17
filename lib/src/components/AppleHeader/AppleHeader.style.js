import { Platform } from "react-native";

export default {
  container: {
    paddingBottom: 8,
    flexDirection: "row",
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#EFEFF4",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  largeTitleStyle: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: "bold",
    letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
  },
  date: {
    color: "#8E8E93",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: Platform.OS === "ios" ? -0.08 : undefined
  },
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
