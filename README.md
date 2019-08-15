<img alt="React Native Bottom Bar" src="https://github.com/WrathChaos/react-native-header-view/blob/master/assets/Screenshots/logo.png" width="1050"/>

Fully customizable Header View with multiple design options for React Native.

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-header-view.svg)](https://www.npmjs.com/package/@freakycoder/react-native-header-view)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-header-view.svg)](https://www.npmjs.org/package/@freakycoder/react-native-header-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<p align="center">
<img alt="React Native Header View" src="https://github.com/WrathChaos/react-native-header-view/blob/master/assets/Screenshots/ss1.png" width="49.7%"/>
<img alt="React Native Header View" src="https://github.com/WrathChaos/react-native-header-view/blob/master/assets/Screenshots/ss2.png" width="49.7%"/>
</p>

## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i @freakycoder/react-native-header-view
```

## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x",
"react-native": ">= 0.55.x",
"react-native-iphone-x-helper": ">= 1.x.x",
"react-native-dynamic-vector-icons": ">= x.x.x"
```

# Usage

## Modern Header Usage

#### Basic Usage



```js
<ModernHeader />
```

#### Advanced Usage

```js
<ModernHeader
  text="Profile"
  rightIconType="Ionicons"
  rightIconName="ios-settings"
  rightIconColor={colors.light.primary}
  leftIconOnPress={() => NavigationService.back()}
/>
```
## Classic Header Usage

#### Basic Usage

```js
<ClassicHeader
  headerTitle="Header"
  rightComponentDisable
  leftComponentOnPress={() => {}}
  hitSlops={
    top: 30,
    bottom: 30,
    left: 30,
    right: 30
  }
/>
```
#### Advanced Custom Usage

```js
<ClassicHeader
  headerTitle="Header"
  leftComponent={
    <TouchableOpacity
      onPress={() => {}}>
      <Icon name="ios-arrow-back" type="Ionicons" size={30} color="blue" />
    </TouchableOpacity>
  }
  rightComponent={
    <TouchableOpacity
      onPress={() => {}}>
      <Icon name="github" type="AntDesign" size={30} color="purple" />
    </TouchableOpacity>
  }
/>
```

### Configuration - Props

#### Modern Header Props

| Property           |   Type    |    Default     | Description                                                     |
| ------------------ | :-------: | :------------: | --------------------------------------------------------------- |
| styles             |  styles   |     styles     | use this to change main style of the header                     |
| text               |  string   | "Header Title" | set the header's title                                          |
| textStyle          |   style   |     style      | set your own style for the header's text                        |
| left               |  number   |       16       | use this to set left icon's align                               |
| right              |  number   |       16       | use this to set right icon's align                              |
| leftIconName       |  string   | ios-arrow-back | change the left icon depends on the React Native Vector Icons   |
| leftIconType       |  string   |    Ionicons    | change the left icon's type                                     |
| leftIconSize       |  number   |       25       | change the left icon's size                                     |
| leftIconColor      |   color   |    #bbbabe     | change the left icon's color                                    |
| rightIconName      |  string   |     heart      | change the right icon depends on the React Native Vector Icons  |
| rightIconType      |  string   |     Entypo     | change the right icon's type                                    |
| rightIconSize      |  number   |       25       | change the right icon's size                                    |
| rightIconColor     |   color   |    #23c4c1     | change the right icon's color                                   |
| leftIconComponent  | component |      Icon      | use your own component instead of the integrated Icon component |
| rightIconComponent | component |      Icon      | use your own component instead of the integrated Icon component |
| leftIconOnPress    | function  |    function    | set the function for left icon's onPress                        |
| rightIconOnPress   | function  |    function    | set the function for right icon's onPress                       |
| leftDisable        |  boolean  |     false      | disable the left icon component                                 |
| rightDisable       |  boolean  |     false      | disable the right icon component                                |


#### Classic Header Props

| Property              |   Type    |  Default   | Description                                                                  |
| --------------------- | :-------: | :--------: | ---------------------------------------------------------------------------- |
| styles                |  styles   |   styles   | use this to change main style of the header                                  |
| height                |  number   |     50     | use this to change the header's height                                       |
| width                 |  number   |    100%    | use this to change the header's width                                        |
| statusBarHidden       |  boolean  |   false    | use this to let Header Component itself re-arrange depends on the status bar |
| hitSlops              |  object   | object: 30 | use this to change the header's left and right components' hitSlots          |
| bottomStick           |  boolean  |   false    | stick the header to bottom side                                              |
| headerTitle           |  string   |     ""     | use this to set header's title                                               |
| backgroundColor       |   color   |  #ffffff   | use this to change the header's background color                             |
| leftComponent         | component |    Icon    | set the left component                                                       |
| leftComponentStyle    |   style   |   style    | set the left component's style                                               |
| leftComponentDisable  |  boolean  |   false    | disable the left component                                                   |
| leftComponentOnPress  | function  |    null    | set the left component's onPress function                                    |
| rightComponent        | component |    Icon    | set the right component                                                      |
| rightComponentStyle   |   style   |   style    | set the right component's style                                              |
| rightComponentDisable |  boolean  |   false    | disable the right component                                                  |
| rightComponentOnPress | function  |    null    | set the right component's onPress function                                   |
| centerComponent       | component |    Icon    | set the center component                                                     |
| centerComponentStyle  |   style   |   style    | set the center component's style                                             |

# Change Log

## [0.3.0](https://github.com/WrathChaos/react-native-header-view/tree/0.3.0) (2019-08-12)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.61...0.3.0)

⚠️ BREAKING CHANGE ON WHOLE LIBRARY ! PLEASE READ !

🚀Now, It has two Header which are : 

* ClassicHeader (Old One)
* ModernHeader (New One)

Usage is not changed however import method is changed. Please check the example ✌️

**Merged pull requests:**

- Bump lodash from 4.17.11 to 4.17.14 in /examples [\#3](https://github.com/WrathChaos/react-native-header-view/pull/3) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump handlebars from 4.1.0 to 4.1.2 in /examples [\#2](https://github.com/WrathChaos/react-native-header-view/pull/2) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump js-yaml from 3.12.1 to 3.13.1 in /examples [\#1](https://github.com/WrathChaos/react-native-header-view/pull/1) ([dependabot[bot]](https://github.com/apps/dependabot))

## [0.2.61](https://github.com/WrathChaos/react-native-header-view/tree/0.2.61) (2019-03-19)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.6...0.2.61)

## [0.2.6](https://github.com/WrathChaos/react-native-header-view/tree/0.2.6) (2019-03-05)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.5...0.2.6)

## [0.2.5](https://github.com/WrathChaos/react-native-header-view/tree/0.2.5) (2019-03-05)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.4...0.2.5)

## [0.2.4](https://github.com/WrathChaos/react-native-header-view/tree/0.2.4) (2019-03-05)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.3...0.2.4)

## [0.2.3](https://github.com/WrathChaos/react-native-header-view/tree/0.2.3) (2019-03-05)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.2...0.2.3)

## [0.2.2](https://github.com/WrathChaos/react-native-header-view/tree/0.2.2) (2019-03-05)
[Full Changelog](https://github.com/WrathChaos/react-native-header-view/compare/0.2.0...0.2.2)

## [0.2.0](https://github.com/WrathChaos/react-native-header-view/tree/0.2.0) (2019-02-23)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Header View Library is available under the MIT license. See the LICENSE file for more info.
