import React from "react";
import { View, Text } from "react-native";
import defaultTexts from "../../assets/data/default-texts.json";
import Styles from "../../config/styles";
import OwnStyles from "./styles";

const NotFound = ({ visible }) => {
  return (
    visible && (
      <View style={OwnStyles.container}>
        <Text style={Styles.notFoundText}>{defaultTexts.noResult}</Text>
      </View>
    )
  );
};

export default NotFound;
