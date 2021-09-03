import React, { useEffect, useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AccountContext } from "../../../../context/AccountContext";
import Styles from "../../../../config/styles";

const HomeScreen = ({ navigation = {} }) => {
  const accountContext = useContext(AccountContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Welcome ${accountContext.state?.data?.username ?? ""}!`
    });
  }, [accountContext.state]);

  return (
    <SafeAreaView style={Styles.f1}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
