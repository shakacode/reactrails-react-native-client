## React Native Tutorial
This is a simple "Hello world" app in React Native.
This tutorial shows how to connect to the the http://www.reactrails.com API for a sample microblog.
Please see https://github.com/shakacode/react-webpack-rails-tutorial for more information on the back end.

### Setup
1. Install the latest version of Xcode from AppStore or https://developer.apple.com/download/ (Apple ID required)
2. Install the latest version of Android Studio from https://developer.android.com/studio/index.html
3. Install Node JS 4.0 or higher

  ```
  brew install node
  ```
4. Install React Native and recommended packages

  ```
  npm install -g react-native-cli
  brew install watchman
  brew install flow
  ```
5. Clone react-native-tutorial repo

  ```
  git clone git@github.com:shakacode/react-native-tutorial.git
  ```
6. Install dependencies

  ```
  cd react-native-tutorial && npm i
  ```

### Backend API

* Currently connecting by default to http://www.reactrails.com/. Be aware of that!

### Running IOS
```
react-native run-ios
```

### Running Android
1. Check that installed build tools match gradle config of android project:
  - In gradle config (app > android > build.gradle), search `buildToolsVersion`
  - Run `android sdk` from bash and find installed build tools version there
2. Run emulator from Android studio or `emulator @<version>` from bash (you can find installed version by running `emulator -list-avds` from bash)
3. From project folder run
```
react-native run-android
```

### Testing
Testing framework uses mocha + enzyme, to run tests type
```
npm test
```

### Linters
This projects uses Eslint with React and React Native rules. To run linters type
```
npm run lint
```
