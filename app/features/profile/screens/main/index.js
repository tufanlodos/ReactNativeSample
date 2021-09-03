import React, { useContext } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AccountContext } from "../../../../context/AccountContext";
import * as Controller from "./controller";
import Styles from "../../../../config/styles";

const Stack4Screen = ({ navigation }) => {
  const accountContext = useContext(AccountContext);

  return (
    <SafeAreaView style={Styles.f1}>
      <Button
        title="Logout"
        onPress={() => Controller.handleLogoutSubmit(navigation, accountContext)}
      />
    </SafeAreaView>
  );
};

export default Stack4Screen;
