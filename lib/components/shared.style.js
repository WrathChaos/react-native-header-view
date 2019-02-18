import { ifIphoneX } from "react-native-iphone-x-helper";

export const ifIPhoneXHeader = {
	...ifIphoneX({
		marginTop: 44,
		marginBottom: 44,
	}, {
		marginTop: 16,
	}),
};
