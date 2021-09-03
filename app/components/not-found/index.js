import React from "react";
import { View, Text } from "react-native";
import defaultMessages from "../../assets/data/default-messages.json";
import Styles from "../../config/styles";
import OwnStyles from "./styles";

const NotFound = ({ visible }) => {
  return (
    visible && (
      <View style={OwnStyles.container}>
        <Text style={Styles.notFoundText}>{defaultMessages.noResult}</Text>
      </View>
    )
  );
};

export default NotFound;
