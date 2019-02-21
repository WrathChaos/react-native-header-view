import { Platform } from "react-native";
import colors from './colors.style';
import { ifIphoneX } from "react-native-iphone-x-helper";

export const ifIPhoneXHeader = {
	...ifIphoneX({
		marginTop: 44,
		marginBottom: 44,
	}, {
		marginTop: 16,
	}),
};

export const hitSlop = {
	top: 30, bottom: 30, left: 30, right: 30
};

export const _shadowStyle = {
	...Platform.select({
		ios: {
			shadowRadius: 5,
			shadowOpacity: 0.15,
			shadowOffset: { width: 1, height: 7 },
			shadowColor: colors.theme.light.shadowColor,
		},
		android: {
			elevation: 6
		},
	})
}

export function container(props) {
	const {backgroundColor, height, width, bottomStick} = props;
	return ({
		backgroundColor: backgroundColor || colors.theme.light.white,
		height: height || 50,
		width: width || "100%",
		top: bottomStick ? null : 0,
		bottom: bottomStick ? 0 : null
	})
}

export default {
	innerContainer: {
		top: 8,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	leftComponentStyle: {
		marginLeft: 16,
	},
	centerComponentStyle: {
		fontSize: 18,
		alignSelf: 'center',
		textAlign: "center",
		alignItems: 'center',
		justifyContent: "center",
		color: colors.theme.light.primary,
	},
	rightComponentStyle: {
		marginRight: 16,
	}
};
