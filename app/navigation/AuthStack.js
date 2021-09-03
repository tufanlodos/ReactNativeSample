import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../features/auth/screens/login/index";
import ROUTE_NAMES from "./config/route-names.json";

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName={ROUTE_NAMES.LOGIN_SCREEN}
      screenOptions={{ animationEnabled: true }}
      headerMode="none"
    >
      <Auth.Screen name={ROUTE_NAMES.LOGIN_SCREEN} component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
