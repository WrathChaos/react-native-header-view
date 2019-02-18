import { Platform } from "react-native";
import colors from './colors.style';

export default {
	outerContainer: {
		position: "absolute",
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
	},
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
