import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import DetailCard from "../../components/detail-card";
import Styles from "../../../../config/styles";

const DetailScreen = ({ navigation = {}, route = {} }) => {
  const { photo } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: photo?.title ?? "-"
    });
  }, []);

  return (
    <SafeAreaView style={[Styles.f1, Styles.screenHorizontalPadding]}>
      <DetailCard photo={photo} />
    </SafeAreaView>
  );
};

export default DetailScreen;
