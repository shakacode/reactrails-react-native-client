## React Native Tutorial
This is a simple mobile app example for posting comments in React Native. It connects the API at
https://www.reactrails.com. You can see a web client there, plus links to the source.

### Setup
1. Install the latest version of Xcode from AppStore or https://developer.apple.com/download/ (Apple ID required)
2. Install the latest version of Android Studio from https://developer.android.com/studio/index.html
3. Install nvm (Node Version Manager)

  ```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
  ```

4. Install NodeJS stable

  ```
  nvm install node
  ```

5. Install React Native and recommended packages

  ```
  npm install -g react-native-cli
  brew install watchman
  brew install flow
  ```

6. Install npm dependencies

  ```
  npm i
  ```

7. Install Native Dependencies (maybe)

* vector-icons


## Customization in Native Files

Besides adding vector-icons

1. App name
2. Icons, both ios and android

### Android

Android Keystore
1. Edit `android/app/src/main/AndroidManifest.xml`



### Backend API

* Currently connecting by default to https://www.reactrails.com/. Be aware of that!
* The url can be changed app/api/index.js. Keep in mind, that Android emulator is
a separate Virtual Machine with its own localhost binding. To make the api available under that emulator,
you will have to use ip address of your computer, which can be seen by running `ifconfig` in the shell

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


### Flow
This projects uses Eslint with React and React Native rules. To run linters type

```
npm run flow
```

### Detailed docs

Can be found in `docs` folder. See [Introduction](docs/Introduction.md) to start.
