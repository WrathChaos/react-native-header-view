import { Platform } from "react-native";
import colors from './colors.style';

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
