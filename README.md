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

cd ios
pod install
cd ..
```
