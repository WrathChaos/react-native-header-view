import * as React from 'react';

/**
 * Type definitions for @freakycoder/react-native-header-view.
 *
 * This package is a barrel that re-exports six standalone React Native header
 * components. The prop interfaces below are intentionally self-contained (no
 * `react-native` import) so the published types resolve in any consumer setup,
 * even before `react-native` types are available. They are deliberately loose
 * where the underlying sub-package accepts arbitrary style/image values.
 */

/** A React Native style object, an array of them, or a registered style id. */
export type StyleValue =
  | Record<string, unknown>
  | number
  | null
  | undefined
  | Array<Record<string, unknown> | number | null | undefined>;

/** A React Native image source (`require(...)`, `{ uri }`, or an array). */
export type ImageSource =
  | number
  | { uri: string; width?: number; height?: number }
  | Array<{ uri: string }>;

// ---------------------------------------------------------------------------
// GorgeousHeader — react-native-gorgeous-header
// ---------------------------------------------------------------------------
export interface GorgeousHeaderProps {
  title?: string;
  subtitle?: string;
  searchIcon?: ImageSource;
  titleTextStyle?: StyleValue;
  subtitleTextStyle?: StyleValue;
  searchBarStyle?: StyleValue;
  searchInputStyle?: StyleValue;
  menuImageStyle?: StyleValue;
  menuImageSource?: ImageSource;
  menuImageOnPress?: () => void;
  profileImageStyle?: StyleValue;
  profileImageSource?: ImageSource;
  profileImageOnPress?: () => void;
  onChangeText?: (text: string) => void;
  [prop: string]: unknown;
}

// ---------------------------------------------------------------------------
// AppleHeader — react-native-apple-header
// ---------------------------------------------------------------------------
export interface AppleHeaderProps {
  dateTitle?: string;
  largeTitle?: string;
  imageSource?: ImageSource;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  dateTitleFontColor?: string;
  dateTitleFontSize?: number;
  dateTitleFontWeight?: string;
  largeTitleFontColor?: string;
  largeTitleFontSize?: number;
  largeTitleFontWeight?: string;
  dateTitleStyle?: StyleValue;
  largeTitleStyle?: StyleValue;
  containerStyle?: StyleValue;
  avatarStyle?: StyleValue;
  [prop: string]: unknown;
}

// ---------------------------------------------------------------------------
// ModernHeader — react-native-modern-header
// ---------------------------------------------------------------------------
export interface ModernHeaderProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  styles?: StyleValue;
  text?: string;
  textStyle?: StyleValue;
  left?: number;
  right?: number;
  leftIconName?: string;
  leftIconType?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  rightIconName?: string;
  rightIconType?: string;
  rightIconSize?: number;
  rightIconColor?: string;
  leftIconComponent?: React.ReactNode;
  rightIconComponent?: React.ReactNode;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
  leftDisable?: boolean;
  rightDisable?: boolean;
  [prop: string]: unknown;
}

// ---------------------------------------------------------------------------
// ClassicHeader — react-native-classic-header
//
// NOTE: The title prop is `title` (NOT `headerTitle`). Older docs incorrectly
// referenced `headerTitle`; see issue #36.
// ---------------------------------------------------------------------------
export interface ClassicHeaderHitSlop {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface ClassicHeaderProps {
  styles?: StyleValue;
  height?: number;
  width?: number | string;
  statusBarHidden?: boolean;
  hitSlops?: ClassicHeaderHitSlop;
  bottomStick?: boolean;
  /** The header title. (Replaces the incorrectly documented `headerTitle`.) */
  title?: string;
  backgroundColor?: string;
  leftComponent?: React.ReactNode;
  leftComponentStyle?: StyleValue;
  leftComponentDisable?: boolean;
  leftComponentOnPress?: () => void;
  rightComponent?: React.ReactNode;
  rightComponentStyle?: StyleValue;
  rightComponentDisable?: boolean;
  rightComponentOnPress?: () => void;
  centerComponent?: React.ReactNode;
  centerComponentStyle?: StyleValue;
  [prop: string]: unknown;
}

// ---------------------------------------------------------------------------
// ProfileHeader — react-native-profile-header
// ---------------------------------------------------------------------------
export interface ProfileHeaderProps {
  onLeftButtonPress?: () => void;
  onProfilePicPress?: () => void;
  onFirstIconPress?: () => void;
  onSecondIconPress?: () => void;
  onThirdIconPress?: () => void;
  profileImageSource?: ImageSource;
  leftAlignedButtonImageSource?: ImageSource;
  firstIconImageSource?: ImageSource;
  secondIconImageSource?: ImageSource;
  thirdIconImageSource?: ImageSource;
  titleText?: string;
  height?: number;
  backgroundColor?: string;
  leftButtonComponent?: React.ReactNode;
  disableFirstIcon?: boolean;
  disableSecondIcon?: boolean;
  disableThirdIcon?: boolean;
  disableLeftAlignedButton?: boolean;
  ImageComponent?: React.ComponentType<unknown>;
  [prop: string]: unknown;
}

// ---------------------------------------------------------------------------
// ElegantHeader — react-native-elegant-header
//
// Previously exported but undocumented. Props are kept open until the
// sub-package's public API is fully enumerated.
// ---------------------------------------------------------------------------
export interface ElegantHeaderProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  containerStyle?: StyleValue;
  titleStyle?: StyleValue;
  subtitleStyle?: StyleValue;
  [prop: string]: unknown;
}

export const GorgeousHeader: React.ComponentType<GorgeousHeaderProps>;
export const AppleHeader: React.ComponentType<AppleHeaderProps>;
export const ModernHeader: React.ComponentType<ModernHeaderProps>;
export const ClassicHeader: React.ComponentType<ClassicHeaderProps>;
export const ProfileHeader: React.ComponentType<ProfileHeaderProps>;
export const ElegantHeader: React.ComponentType<ElegantHeaderProps>;
