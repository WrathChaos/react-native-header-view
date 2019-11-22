export const leftCompStyle = left => ({
  left,
  position: "absolute"
});

export const rightCompStyle = right => ({
  right,
  position: "absolute"
});

export const container = (height, width, backgroundColor) => ({
  top: 0,
  height,
  width,
  backgroundColor,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
});

export default {
  textStyle: {
    fontWeight: "800"
  }
};
