<img alt="React Native Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/kuraydev/react-native-header-view)
[![Collection of Header Views for React Native](https://img.shields.io/badge/-Collection%20of%20Header%20Views%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/kuraydev/react-native-header-view)
[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-header-view.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-header-view)
[![npm downloads](https://img.shields.io/npm/dt/@freakycoder/react-native-header-view.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-header-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

> A single package that re-exports six ready-made, customizable React Native header views — **Gorgeous**, **Apple**, **Modern**, **Classic**, **Profile**, and **Elegant** — so you can pick the one you need without juggling six installs. Each header is also published standalone if you only want one.

<table>
  <tr>
    <td><b>Apple Header</b></td>
    <td><b>Gorgeous Header</b></td>
  </tr>
  <tr>
    <td align="center"><img alt="React Native Apple Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/apple-header-view.png" width="686px"/></td>
    <td align="center"><img alt="React Native Gorgeous Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/gorgeous-header-view.png" width="686px" /></td>
  </tr>
</table>

<table>
  <tr>
    <td><b>Elegant Header</b></td>
    <td><b>Modern Header</b></td>
  </tr>
  <tr>
    <td align="center"><img alt="React Native Elegant Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/react-native-elegant-header.png" width="686px"/></td>
    <td align="center"><img alt="React Native Modern Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/modern-header-view2.png" width="686px"/></td>
  </tr>
</table>

<table>
  <tr>
    <td><b>Profile Header</b></td>
    <td><b>Classic Header</b></td>
  </tr>
  <tr>
    <td align="center"><img alt="React Native Profile Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/profile-header-view.png" width="686px"/></td>
    <td align="center"><img alt="React Native Classic Header View" src="https://raw.githubusercontent.com/kuraydev/react-native-header-view/master/assets/Screenshots/classic-header-view.png" width="686px"/></td>
  </tr>
</table>

## Table of Contents

- [How it works](#how-it-works)
- [Installation](#installation)
- [The six headers](#the-six-headers)
- [Usage](#usage)
  - [GorgeousHeader](#gorgeousheader)
  - [AppleHeader](#appleheader)
  - [ModernHeader](#modernheader)
  - [ClassicHeader](#classicheader)
  - [ProfileHeader](#profileheader)
  - [ElegantHeader](#elegantheader)
- [Props](#props)
- [TypeScript](#typescript)
- [New Architecture & Expo](#new-architecture--expo)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## How it works

`@freakycoder/react-native-header-view` contains **no UI of its own**. It is a
barrel that re-exports six standalone header packages:

| Export           | Source package                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `GorgeousHeader` | [`react-native-gorgeous-header`](https://github.com/kuraydev/react-native-gorgeous-header) |
| `AppleHeader`    | [`react-native-apple-header`](https://github.com/kuraydev/react-native-apple-header)       |
| `ModernHeader`   | [`react-native-modern-header`](https://github.com/kuraydev/react-native-modern-header)     |
| `ClassicHeader`  | [`react-native-classic-header`](https://github.com/kuraydev/react-native-classic-header)   |
| `ProfileHeader`  | [`react-native-profile-header`](https://github.com/kuraydev/react-native-profile-header)   |
| `ElegantHeader`  | [`react-native-elegant-header`](https://github.com/kuraydev/react-native-elegant-header)   |

Because the actual components live in those packages, **each header you use must
also be installed**. They are declared as _optional_ peer dependencies — you only
need the ones you import.

## Installation

Install the package plus whichever headers you intend to use. To get all six:

```bash
npm install @freakycoder/react-native-header-view \
  react-native-gorgeous-header \
  react-native-apple-header \
  react-native-modern-header \
  react-native-classic-header \
  react-native-profile-header \
  react-native-elegant-header
```

or with Yarn:

```bash
yarn add @freakycoder/react-native-header-view \
  react-native-gorgeous-header react-native-apple-header react-native-modern-header \
  react-native-classic-header react-native-profile-header react-native-elegant-header
```

Only need one header? Install just that one — e.g. for `GorgeousHeader`:

```bash
npm install @freakycoder/react-native-header-view react-native-gorgeous-header
```

> Some headers render vector icons via
> [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)
> (or `react-native-dynamic-vector-icons`). If a header shows icons, install and
> link that dependency too.

## The six headers

- `GorgeousHeader`
- `AppleHeader`
- `ModernHeader`
- `ClassicHeader`
- `ProfileHeader`
- `ElegantHeader`

## Usage

All headers are named exports:

```jsx
import {
  GorgeousHeader,
  AppleHeader,
  ModernHeader,
  ClassicHeader,
  ProfileHeader,
  ElegantHeader,
} from "@freakycoder/react-native-header-view";
```

### GorgeousHeader

```jsx
import { GorgeousHeader } from "@freakycoder/react-native-header-view";

<GorgeousHeader onChangeText={(text) => console.log(text)} />;
```

### AppleHeader

```jsx
import { AppleHeader } from "@freakycoder/react-native-header-view";

<AppleHeader />;
```

### ModernHeader

```jsx
import { ModernHeader } from "@freakycoder/react-native-header-view";

<ModernHeader />;
```

Advanced usage (replace `<YourIcon />` with your own component):

```jsx
import { ModernHeader } from "@freakycoder/react-native-header-view";

<ModernHeader
  text="Profile"
  rightIconType="Ionicons"
  backgroundColor="#fdfdfd"
  rightIconName="ios-settings"
  rightIconColor={colors.light.primary}
  leftIconComponent={<YourIcon />}
  rightIconComponent={<YourIcon />}
  leftIconOnPress={() => NavigationService.back()}
/>;
```

### ClassicHeader

> **Note:** the title prop is **`title`**, not `headerTitle`. (Older docs
> incorrectly showed `headerTitle` — see [#36](https://github.com/kuraydev/react-native-header-view/issues/36).)

Basic usage:

```jsx
import { ClassicHeader } from "@freakycoder/react-native-header-view";

<ClassicHeader
  title="Header"
  rightComponentDisable
  leftComponentOnPress={() => {}}
  hitSlops={{
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
  }}
/>;
```

Advanced custom usage:

```jsx
import { ClassicHeader } from "@freakycoder/react-native-header-view";

<ClassicHeader
  title="Header"
  leftComponent={
    <TouchableOpacity onPress={() => {}}>
      <Icon name="ios-arrow-back" type="Ionicons" size={30} color="blue" />
    </TouchableOpacity>
  }
  rightComponent={
    <TouchableOpacity onPress={() => {}}>
      <Icon name="github" type="AntDesign" size={30} color="purple" />
    </TouchableOpacity>
  }
/>;
```

### ProfileHeader

```jsx
import { ProfileHeader } from "@freakycoder/react-native-header-view";

<ProfileHeader titleText="Profile" onLeftButtonPress={() => {}} />;
```

### ElegantHeader

```jsx
import { ElegantHeader } from "@freakycoder/react-native-header-view";

<ElegantHeader />;
```

## Props

Each header forwards its props to the underlying standalone package. The tables
below summarize the most common props; see each sub-package for the complete,
authoritative list.

### GorgeousHeader Props

| Property            |   Type   |            Default             | Description                                |
| ------------------- | :------: | :----------------------------: | ------------------------------------------ |
| title               |  string  |             Order              | header title                               |
| subtitle            |  string  | Healthy food can keep you fit. | header subtitle                            |
| onChangeText        | function |           undefined            | called with the search input text          |
| searchIcon          |  asset   |            default             | custom search icon                         |
| titleTextStyle      |  style   |            default             | style for the title text                   |
| subtitleTextStyle   |  style   |            default             | style for the subtitle text                |
| searchBarStyle      |  style   |            default             | style for the search input container       |
| searchInputStyle    |  style   |            default             | style for the search text input            |
| menuImageStyle      |  style   |            default             | style for the hamburger menu image         |
| menuImageSource     |  asset   |            default             | custom hamburger menu image                |
| menuImageOnPress    | function |           undefined            | press handler for the hamburger menu image |
| profileImageStyle   |  style   |            default             | style for the profile image                |
| profileImageSource  |  asset   |           undefined            | custom profile image                       |
| profileImageOnPress | function |           undefined            | press handler for the profile image        |

### AppleHeader Props

| Property             |   Type   |       Default       | Description                                |
| -------------------- | :------: | :-----------------: | ------------------------------------------ |
| dateTitle            |  string  | MONDAY, 27 NOVEMBER | date title text                            |
| largeTitle           |  string  |       For You       | large title text                           |
| imageSource          |  image   |        image        | avatar image                               |
| onPress              | function |        null         | press handler                              |
| backgroundColor      |  color   |     transparent     | container background color                 |
| borderColor          |  color   |       #EFEFF4       | bottom border color                        |
| dateTitleFontColor   |  color   |       #8E8E93       | date title font color                      |
| dateTitleFontSize    |  number  |         13          | date title font size                       |
| dateTitleFontWeight  |  string  |        "600"        | date title font weight                     |
| largeTitleFontColor  |  color   |    default color    | large title font color                     |
| largeTitleFontSize   |  number  |         34          | large title font size                      |
| largeTitleFontWeight |  string  |       "bold"        | large title font weight                    |
| dateTitleStyle       |  style   |    default style    | custom date title style                    |
| largeTitleStyle      |  style   |    default style    | custom large title style                   |
| containerStyle       |  style   |    default style    | custom container style                     |
| avatarStyle          |  style   |    default style    | custom avatar style (keep a border radius) |

### ModernHeader Props

| Property           |       Type       |    Default     | Description                    |
| ------------------ | :--------------: | :------------: | ------------------------------ |
| height             | string OR number |       70       | header height                  |
| width              | string OR number |     "100%"     | header width                   |
| backgroundColor    |      string      |      #fff      | header background color        |
| styles             |      style       |    default     | main header style              |
| text               |      string      |  Header Title  | header title                   |
| textStyle          |      style       |    default     | style for the header text      |
| left               |      number      |       16       | left icon alignment            |
| right              |      number      |       16       | right icon alignment           |
| leftIconName       |      string      | ios-arrow-back | left icon name (vector icons)  |
| leftIconType       |      string      |    Ionicons    | left icon type                 |
| leftIconSize       |      number      |       25       | left icon size                 |
| leftIconColor      |      color       |    #bbbabe     | left icon color                |
| rightIconName      |      string      |     heart      | right icon name (vector icons) |
| rightIconType      |      string      |     Entypo     | right icon type                |
| rightIconSize      |      number      |       25       | right icon size                |
| rightIconColor     |      color       |    #23c4c1     | right icon color               |
| leftIconComponent  |    component     |      Icon      | custom left icon component     |
| rightIconComponent |    component     |      Icon      | custom right icon component    |
| leftIconOnPress    |     function     |   undefined    | left icon press handler        |
| rightIconOnPress   |     function     |   undefined    | right icon press handler       |
| leftDisable        |     boolean      |     false      | hide the left icon             |
| rightDisable       |     boolean      |     false      | hide the right icon            |

### ClassicHeader Props

| Property              |   Type    |    Default    | Description                          |
| --------------------- | :-------: | :-----------: | ------------------------------------ |
| title                 |  string   |      ""       | header title (**not** `headerTitle`) |
| styles                |   style   |    default    | main header style                    |
| height                |  number   |      50       | header height                        |
| width                 |  number   |     100%      | header width                         |
| statusBarHidden       |  boolean  |     false     | re-arrange around the status bar     |
| hitSlops              |  object   | `{ ...: 30 }` | hit slop for left/right components   |
| bottomStick           |  boolean  |     false     | stick the header to the bottom       |
| backgroundColor       |   color   |    #ffffff    | header background color              |
| leftComponent         | component |     Icon      | left component                       |
| leftComponentStyle    |   style   |    default    | left component style                 |
| leftComponentDisable  |  boolean  |     false     | hide the left component              |
| leftComponentOnPress  | function  |     null      | left component press handler         |
| rightComponent        | component |     Icon      | right component                      |
| rightComponentStyle   |   style   |    default    | right component style                |
| rightComponentDisable |  boolean  |     false     | hide the right component             |
| rightComponentOnPress | function  |     null      | right component press handler        |
| centerComponent       | component |     Icon      | center component                     |
| centerComponentStyle  |   style   |    default    | center component style               |

### ProfileHeader Props

| Property                     |   Type    |  Default  | Description                               |
| ---------------------------- | :-------: | :-------: | ----------------------------------------- |
| titleText                    |  string   | undefined | title text                                |
| onLeftButtonPress            | function  | undefined | left button press handler                 |
| onProfilePicPress            | function  | undefined | profile picture press handler             |
| onFirstIconPress             | function  | undefined | first icon press handler                  |
| onSecondIconPress            | function  | undefined | second icon press handler                 |
| onThirdIconPress             | function  | undefined | third icon press handler                  |
| profileImageSource           |   image   |  default  | profile image source                      |
| leftAlignedButtonImageSource |   image   |  default  | left-aligned button image source          |
| firstIconImageSource         |   image   |  default  | first icon image source                   |
| secondIconImageSource        |   image   |  default  | second icon image source                  |
| thirdIconImageSource         |   image   |  default  | third icon image source                   |
| height                       |  number   |    50     | header height                             |
| backgroundColor              |   color   |   #fff    | header background color                   |
| leftButtonComponent          | component |   Image   | custom left-aligned button component      |
| disableFirstIcon             |  boolean  |   false   | hide the first icon                       |
| disableSecondIcon            |  boolean  |   false   | hide the second icon                      |
| disableThirdIcon             |  boolean  |   false   | hide the third icon                       |
| disableLeftAlignedButton     |  boolean  |   false   | hide the left-aligned button              |
| ImageComponent               | component |   Image   | custom Image component (e.g. `FastImage`) |

### ElegantHeader Props

`ElegantHeader` is re-exported from
[`react-native-elegant-header`](https://github.com/kuraydev/react-native-elegant-header).
Refer to that package for its full, authoritative prop list. Commonly used props
include `title`, `subtitle`, and `backgroundColor`.

## TypeScript

Type definitions ship with the package — no `@types/...` install required. Every
header is exported with a typed props interface:

```tsx
import {
  ClassicHeader,
  type ClassicHeaderProps,
} from "@freakycoder/react-native-header-view";

const props: ClassicHeaderProps = { title: "Header" };

<ClassicHeader {...props} />;
```

## New Architecture & Expo

This package is **pure JavaScript** with **no native modules** of its own, so it
imposes no New Architecture (Fabric / TurboModules) constraints — Fabric
compatibility is entirely determined by the individual header sub-packages you
install. It works in bare React Native and in Expo (dev client / prebuild)
projects, subject to each sub-package's own requirements.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Contributing

Contributions are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Credits

Photo by [Joanna Nix](https://unsplash.com/@joanna_nix) on
[Unsplash](https://unsplash.com/photos/9Zso3BvhuCk).

## Author

Kuray (FreakyCoder), kurayogun@gmail.com

## License

`@freakycoder/react-native-header-view` is available under the MIT license. See
the [LICENSE](./LICENSE) file for more information.
