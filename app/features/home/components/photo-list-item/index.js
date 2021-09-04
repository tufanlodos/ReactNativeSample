import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import ProgressiveImage from "../../../../components/progressive-image/index";
import { getFlickrUrl } from "../../../../lib/common-methods";
import ROUTE_NAMES from "../../../../navigation/config/route-names.json";
import OwnStyles from "./styles";

const PhotoListItem = ({ photo = {} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={OwnStyles.container}
      activeOpacity={1}
      onPress={() => navigation.navigate(ROUTE_NAMES.HOME_DETAIL_SCREEN, { photo })}
    >
      <ProgressiveImage url={getFlickrUrl(photo)} />

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
