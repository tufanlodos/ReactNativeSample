import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PhotoList from "../../components/photo-list";
import { Context as AccountContext } from "../../../../context/AccountContext";
import Styles from "../../../../config/styles";
import PhotoSearchInput from "../../components/photo-search-input";

const HomeScreen = ({ navigation = {} }) => {
  const accountContext = useContext(AccountContext);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Welcome ${accountContext.state?.data?.username ?? ""}!`
    });
  }, [accountContext.state]);

  return (
    <SafeAreaView style={[Styles.f1, Styles.screenHorizontalPadding]}>
      <PhotoSearchInput />
      <PhotoList />
    </SafeAreaView>
  );
};

export default HomeScreen;
