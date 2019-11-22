import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles, {
  container,
  _dateTitleStyle,
  _largeTitleStyle
} from "./AppleHeader.style";

const AppleHeader = props => {
  const {
    onPress,
    dateTitle,
    largeTitle,
    avatarStyle,
    imageSource,
    containerStyle,
    dateTitleStyle,
    largeTitleStyle,
    borderColor,
    backgroundColor,
    dateTitleFontSize,
    dateTitleFontColor,
    dateTitleFontWeight,
    largeTitleFontSize,
    largeTitleFontColor,
    largeTitleFontWeight
  } = props;
  return (
    <View style={containerStyle || container(backgroundColor, borderColor)}>
      <View>
        <Text
          style={
            dateTitleStyle ||
            _dateTitleStyle(
              dateTitleFontColor,
              dateTitleFontSize,
              dateTitleFontWeight
            )
          }
        >
          {dateTitle}
        </Text>
        <Text
          style={
            largeTitleStyle ||
            _largeTitleStyle(
              largeTitleFontColor,
              largeTitleFontSize,
              largeTitleFontWeight
            )
          }
        >
          {largeTitle}
        </Text>
      </View>
      <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
        <Image style={avatarStyle} source={imageSource} {...props} />
      </TouchableOpacity>
    </View>
  );
};

AppleHeader.propTypes = {
  dateTitle: PropTypes.string,
  largeTitle: PropTypes.string,
  dateTitleFontSize: PropTypes.number,
  dateTitleFontColor: PropTypes.string,
  dateTitleFontWeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  largeTitleFontSize: PropTypes.number,
  largeTitleFontColor: PropTypes.string,
  largeTitleFontWeight: PropTypes.string
};

AppleHeader.defaultProps = {
  dateTitleFontSize: 13,
  largeTitle: "For You",
  dateTitleFontWeight: "600",
  largeTitleFontSize: 34,
  borderColor: "#EFEFF4",
  dateTitleFontColor: "#8E8E93",
  avatarStyle: styles.avatar,
  dateTitleStyle: styles.date,
  largeTitleFontWeight: "bold",
  backgroundColor: "transparent",
  dateTitle: "MONDAY, 27 NOVEMBER",
  containerStyle: styles.container,
  largeTitleStyle: styles.largeTitleStyle
};

export default AppleHeader;
