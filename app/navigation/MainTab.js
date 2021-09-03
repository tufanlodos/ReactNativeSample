import React, { useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainTabBarComponent from "./components/main-tab-bar/index";
import HomeStack from "../features/home/HomeStack";
import ProfileStack from "../features/profile/ProfileStack";
import { Context as AccountContext } from "../context/AccountContext";
import ROUTE_NAMES from "./config/route-names.json";

const Main = createBottomTabNavigator();
const MainTab = () => {
  const accountContext = useContext(AccountContext);

  useEffect(() => {
    accountContext.setAccount();
  }, []);

  return (
    <Main.Navigator
      initialRouteName={ROUTE_NAMES.HOME_STACK}
      // eslint-disable-next-line react/jsx-props-no-spreading
      tabBar={(props) => <MainTabBarComponent {...props} />}
    >
      <Main.Screen
        name={ROUTE_NAMES.HOME_STACK}
        options={{
          title: "Home",
          unmountOnBlur: false
        }}
        component={HomeStack}
      />
      <Main.Screen
        name={ROUTE_NAMES.PROFILE_STACK}
        options={{
          title: "Profile",
          unmountOnBlur: true
        }}
        component={ProfileStack}
      />
    </Main.Navigator>
  );
};

export default MainTab;
