import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./AuthStack";
import MainTab from "./MainTab";
import { navigationRef } from "./modules/RootNavigation";
import { Provider as AccountProvider } from "../context/AccountContext";
import ErrorBoundary from "../components/error-boundary/index";
import { getStorageData } from "../lib/storage-operations";
import { ASYNC_STORAGE_KEYS } from "../config/configurations";
import ROUTE_NAMES from "./config/route-names.json";
import Styles from "../config/styles";
import Colors from "../assets/data/color-list.json";

const RootStack = createStackNavigator();

const App = () => {
  const [initializeState, setInitializeState] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState(ROUTE_NAMES.AUTH_STACK);

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.brighter
    }
  };

  useEffect(() => {
    checkAccountAndInit();
  }, []);

  const checkAccountAndInit = async () => {
    // account context is not available here (because its provider is in this file)
    const userData = await getStorageData(ASYNC_STORAGE_KEYS.ACCOUNT_ITEM);

    if (userData) {
      setInitialRouteName(ROUTE_NAMES.MAIN_TAB);
    } else {
      setInitialRouteName(ROUTE_NAMES.AUTH_STACK);
    }

    setInitializeState(false);
  };

  if (initializeState) {
    return (
      <View style={[Styles.f1, Styles.fajCenterItem]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <RootSiblingParent>
        <AccountProvider>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef} theme={AppTheme}>
              <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
              <RootStack.Navigator initialRouteName={initialRouteName} headerMode="none">
                <RootStack.Screen name={ROUTE_NAMES.AUTH_STACK} component={AuthStack} />
                <RootStack.Screen name={ROUTE_NAMES.MAIN_TAB} component={MainTab} />
              </RootStack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </AccountProvider>
      </RootSiblingParent>
    </ErrorBoundary>
  );
};

export default App;
