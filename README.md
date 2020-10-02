# React Native Study


## Setup

```
# XCode, node.js 설치되어 있어야 함

node --version

# [expo cli] 여기 예제에서는 아래의 react-native만 사용
# npm install -g expo-cli
# expo init expoTest
# cd expoTest/
# npm start

# [react-native cli]
brew install watchman
npm install -g react-native-cli
sudo gem install cocoapods
```


## Make Project

```
# 프로젝트 초기화
cd <WORKSPACE_PATH>
npx react-native init <PROJECT_NAME>
cd <WORKSPACE_PATH>/<PROJECT_NAME>

# 탭을 사용하려는 경우 사전 설치
npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# Bottom 탭을 사용하려는 경우 설치
npm install @react-navigation/bottom-tabs

# Drawer 탭을 사용하려는 경우 설치
npm install @react-navigation/drawer

# 아이콘을 사용하려는 경우 설치
npm install react-native-ionicons

# iOS에 pod install 실행
npx pod-install ios
```


## Run

```
npx react-native run-ios
```