import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const ModernHeader = props => {
  const {} = props;
  return (
    <View
      style={{ top: 0, height: 70, backgroundColor: "white", width: "100%" }}
    >
      <Text>New Component</Text>
    </View>
  );
};

ModernHeader.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string
};

ModernHeader.defaultProps = {
  stars: 5,
  ratings: "Hellooo"
};

export default ModernHeader;
