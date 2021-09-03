import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ProgressiveImage from "../../../../components/progressive-image/index";
import * as Controller from "./controller";
import OwnStyles from "./styles";

const PhotoListItem = ({ photo = {} }) => {
  return (
    <TouchableOpacity style={OwnStyles.container} activeOpacity={1}>
      <ProgressiveImage url={Controller.getFlickrUrl(photo)} />

      <View style={OwnStyles.footer}>
        {Boolean(photo.title) && (
          <Text numberOfLines={1} style={OwnStyles.footerText}>
            {photo.title}
          </Text>
        )}
        <View style={OwnStyles.footerButton}>
          <Text>See Details</Text>
          <Icon name="chevron-right" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PhotoListItem;
