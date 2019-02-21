import React from "react";
import PropTypes from 'prop-types';
import {
	Dimensions,
	View,
	Text,
	TouchableOpacity
} from "react-native";
import Icon from "react-native-dynamic-vector-icons"
// Styles
import _styles, {
	container,
	_shadowStyle,
	hitSlop,
	ifIPhoneXHeader
} from './Header.style';
import colors from './colors.style';

const { width } = Dimensions.get("window");

const Header = (props) => {

	const _leftComponent =
		<Icon
			name="ios-arrow-back"
			type="Ionicons"
			size={30}
			color={colors.theme.light.primary}
		/>

	const {
		styles,
		hitSlops,
		shadowStyle,
		headerTitle,
		leftComponent,
		leftComponentStyle,
		leftComponentDisable,
		leftComponentOnPress,
		rightComponent,
		rightComponentStyle,
		rightComponentDisable,
		rightComponentOnPress,
		centerComponent,
		centerComponentStyle
	} = props;

	return (
		<View style={[styles || container(props), ifIPhoneXHeader, shadowStyle || _shadowStyle,]}>
			<View style={[_styles.innerContainer]}>
				{leftComponent
					|| <TouchableOpacity
						style={[leftComponentStyle || _styles.leftComponentStyle, {
							opacity: leftComponentDisable ? 0 : 1,
						}]}
						hitSlop={hitSlops || hitSlop}
						onPress={leftComponentOnPress}>
						{_leftComponent}
					</TouchableOpacity>}
				{centerComponent
					|| <Text style={[centerComponentStyle || _styles.centerComponentStyle]}>
						{headerTitle}
					</Text>}
				{rightComponent
					|| <TouchableOpacity
						style={[rightComponentStyle || _styles.rightComponentStyle, {
							opacity: rightComponentDisable ? 0 : 1,
						}]}
						hitSlop={hitSlops || hitSlop}
						onPress={rightComponentOnPress} >
						<Icon
							name="ios-menu"
							type="ionicon"
							size={30}
							color={colors.theme.light.primaryWhite}
						/>
					</TouchableOpacity>}
			</View>
		</View>
	);
}

Header.propTypes = {
	styles: PropTypes.object,
	height: PropTypes.number,
	width: PropTypes.number,
	hitSlops: PropTypes.object,
	bottomStick: PropTypes.bool,
	shadowStyle: PropTypes.object,
	headerTitle: PropTypes.string,
	backgroundColor: PropTypes.string,
	leftComponent: PropTypes.element,
	leftComponentStyle: PropTypes.object,
	leftComponentDisable: PropTypes.bool,
	leftComponentOnPress: PropTypes.func,
	rightComponent: PropTypes.element,
	rightComponentStyle: PropTypes.object,
	rightComponentDisable: PropTypes.bool,
	rightComponentOnPress: PropTypes.func,
	centerComponent: PropTypes.element,
	centerComponentStyle: PropTypes.object,
};

Header.defaultProps = {
	styles: null,
	height: 50,
	width: width,
	hitSlops: hitSlop,
	bottomStick: false,
	shadowStyle: _shadowStyle,
	headerTitle: '',
	backgroundColor: "#fff",
	leftComponent: _leftComponent,
	leftComponentStyle: null,
	leftComponentDisable: true,
	leftComponentOnPress: () => { },
	rightComponent: PropTypes.element,
	rightComponentStyle: null,
	rightComponentDisable: true,
	rightComponentOnPress: () => { },
	centerComponent: null,
	centerComponentStyle: null,
};

export default Header;