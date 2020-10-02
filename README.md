# React Native Study

## Setup

```
node --version

# [expo cli]
npm install -g expo-cli
expo init expoTest
cd expoTest/
npm start

# [react-native cli]
brew install watchman
npm install -g react-native-cli
sudo gem install cocoapods
npx react-native init nativeTest
npx react-native run-ios
```

## React navigation
- 네비게이션은 React navigation과 React native navigation이 있다.
- React navigation이 좀 더 느리지만 더 편함, native는 iOS, Android 코드 수정 필요 등

```
[Installing react navigation] —> https://reactnative.dev/docs/navigation#usage
npm install @react-navigation/native @react-navigation/stack

# [expo cli]
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# [react native cli]
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# Navigation
npm install @react-navigation/native
# [expo cli]
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# [react native cli]
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# [tab navigation] —> https://reactnavigation.org/docs/tab-based-navigation
npm install @react-navigation/bottom-tabs

# [drawer navigation] —> https://reactnavigation.org/docs/drawer-based-navigation
npm install @react-navigation/drawer

# Icons —> https://www.npmjs.com/package/react-native-ionicons
npm install react-native-ionicons
# ios/Info.plist에 폰트 추가, 폰트 ios/android에 링크해줌
# react 6.x 에서는 안해도 된다고 함
npx react-native link react-native-ionicons
# ios에 폰트 설치해줌
cd ios && pod install && cd ..
```

## 라이브러리 변경되면 pod install 해줘야 함

```
npx pod-install ios

# or

cd ios && pod install && cd ..
```