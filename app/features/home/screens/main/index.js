import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PhotoList from "../../components/photo-list";
import PhotoSearchInput from "../../components/photo-search-input";
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
    <SafeAreaView style={[Styles.f1, Styles.screenHorizontalPadding, Styles.iosNotchBalancer]}>
      <PhotoSearchInput />
      <PhotoList />
    </SafeAreaView>
  );
};

export default HomeScreen;
