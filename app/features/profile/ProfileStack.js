import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import ProfileScreen from "./screens/main/index";
import ROUTE_NAMES from "../../navigation/config/route-names.json";
import Styles from "../../config/styles";

const Stack = createStackNavigator();
const ProfileStack = () => (
  <Stack.Navigator
    initialRouteName={ROUTE_NAMES.PROFILE_MAIN_SCREEN}
    screenOptions={{
      animationEnabled: true,
      headerTitleStyle: Styles.headerTitleStyle,
      headerStyle: Styles.headerContainerStyle,
      headerTitle: "",
      headerTitleAlign: "center",
      headerBackTitleVisible: false,
      headerBackImage: () => (
        <Icon
          name="arrow-left"
          size={24}
          style={Platform.OS === "ios" ? Styles.ml15 : Styles.ml10}
        />
      )
    }}
  >
    <Stack.Screen name={ROUTE_NAMES.PROFILE_MAIN_SCREEN} component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
