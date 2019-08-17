import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./AppleHeader.style";

const AppleHeader = props => {
  const { dateTitle, largeTitle, imageSource, onPress } = props;
  return (
    <View style={styles.container} {...props}>
      <View>
        <Text style={styles.date}>{dateTitle}</Text>
        <Text style={styles.largeTitleStyle}>{largeTitle}</Text>
      </View>
      <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
        <Image style={styles.avatar} source={imageSource} {...props} />
      </TouchableOpacity>
    </View>
  );
};

AppleHeader.propTypes = {
  dateTitle: PropTypes.string,
  largeTitle: PropTypes.string
};

AppleHeader.defaultProps = {
  dateTitle: "MONDAY, 27 NOVEMBER",
  largeTitle: "For You",
  imageSource: require("../../../../assets/temp/joshua-rawson-harris-NdZtmw_jlMk-unsplash.jpg")
};

export default AppleHeader;
