# React Native 0.64.1 boilerplate

## Includes

- React 17
- React Native 0.64.1
- React Navigation 5 (includes stack and bottom-tabs)
- React Native Async Storage
- React Native Device Info
- React Native Vector Icons
- ESLint & Prettier configurations
- Context for Orientation

## Installation

- `cd` into cloned repository
- run command `yarn`
- `cd ios`
- run command `pod install`
- `cd ..`
- run command `npm run ios` for ios, `npm run android` for android

## After Succesfully Build

- You can use **react-native-rename** cli tool for rename entire app. For more information: https://www.npmjs.com/package/react-native-rename

---

Base Component:

```jsx
import React from "react";
import { View, Text } from "react-native";
import OwnStyles from "./styles";

const Apple = () => {
  return (
    <View>
      <Text>Sucks</Text>
    </View>
  );
};

export default Apple;
```

Base OwnStyle :

```js
import { StyleSheet } from "react-native";
import Colors from "../../../../assets/data/color-list.json";

const styles = StyleSheet.create({});

export default styles;
```

Base Controller :

```js
const initialState = {
  initialized: false,
  refreshing: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRefresh":
      return { ...state, refreshing: action.payload };
    case "setInitialized":
      return { ...state, initialized: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
```
