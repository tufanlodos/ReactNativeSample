/* eslint-disable no-underscore-dangle */
import React from "react";
import { View, Text, ScrollView } from "react-native";
import ProgressiveImage from "../../../../components/progressive-image/index";
import Styles from "../../../../config/styles";
import { getFlickrUrl } from "../../../../lib/common-methods";
import OwnStyles from "./styles";

const DetailCard = ({ photo = {} }) => {
  return (
    <ScrollView style={OwnStyles.scrollContainer} contentContainerStyle={Styles.ph5}>
      <ProgressiveImage url={getFlickrUrl(photo)} />
      <View style={OwnStyles.metaContainer}>
        <Text style={Styles.fwBold}>{photo?.title ?? "-"}</Text>
        <Text style={OwnStyles.middleText}>
          Uploaded at {photo?.dateupload} by {photo?.ownername}
        </Text>
        <Text>{photo?.description?._content ?? "-"}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailCard;
