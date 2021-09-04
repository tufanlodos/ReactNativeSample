import React, { useEffect } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import ProgressiveImage from "../../../../components/progressive-image/index";
import { getFlickrUrl } from "../../../../lib/common-methods";
import Styles from "../../../../config/styles";
// import OwnStyles from "./styles";

const DetailScreen = ({ navigation = {}, route = {} }) => {
  const { photo } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: photo?.title ?? ""
    });
  }, []);

  return (
    <SafeAreaView style={[Styles.f1, Styles.screenHorizontalPadding]}>
      <ScrollView style={Styles.f1}>
        <ProgressiveImage url={getFlickrUrl(photo)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
