/* eslint-disable no-nested-ternary */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ROUTE_NAMES from "../../config/route-names.json";
import { CONSTANTS } from "../../../config/configurations";
import Colors from "../../../assets/data/color-list.json";
import Styles from "../../../config/styles";
import OwnStyles from "./styles";

const mainTabBarIconSize = CONSTANTS.isMobileSize ? 18 : 22;

const MainTabBarComponent = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        Styles.fdRow,
        Styles.shadowForWhite,
        CONSTANTS.isMobileSize
          ? CONSTANTS.hasNotch
            ? [Styles.pb30, Styles.pt10, Styles.ph0]
            : [Styles.pv15]
          : [Styles.pv15],
        Styles.bgWhite
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            style={[Styles.f1, Styles.fdCol, Styles.algiCenter, Styles.jcCenter]}
            key={route.key}
            onPress={onPress}
            // onLongPress={onLongPress}
          >
            <View style={[Styles.fdCol, Styles.jcCenter, Styles.algiCenter, OwnStyles.mb3]}>
              {route.name === ROUTE_NAMES.HOME_STACK && (
                <Icon
                  size={mainTabBarIconSize}
                  name="zap"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
              {route.name === ROUTE_NAMES.PROFILE_STACK && (
                <Icon
                  size={mainTabBarIconSize}
                  name="user"
                  color={!isFocused ? Colors.grey : Colors.primary}
                />
              )}
            </View>
            <Text
              style={
                isFocused ? [Styles.textPrimary, Styles.fwBold] : [Styles.textGrey, Styles.fwNormal]
              }
            >
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTabBarComponent;
