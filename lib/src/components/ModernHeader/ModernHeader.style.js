export function leftCompStyle(left) {
  return {
    position: "absolute",
    left
  };
}

export function rightCompStyle(right) {
  return {
    position: "absolute",
    right
  };
}

export default {
  container: {
    top: 0,
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center"
  },
  textStyle: {
    fontWeight: "800"
  }
};
