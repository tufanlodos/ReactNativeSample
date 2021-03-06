import React, { useContext } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Context as PhotoListContext } from "../../../../context/PhotoListContext";
import Colors from "../../../../assets/data/color-list.json";
import Styles from "../../../../config/styles";
import OwnStyles from "./styles";

function PhotoSearchInput() {
  const photoListContext = useContext(PhotoListContext);
  const { keyword, refreshing, totalCount } = photoListContext.state;

  return (
    <View style={[OwnStyles.container, refreshing && Styles.opacityHalf]}>
      <View style={OwnStyles.inputContainer}>
        <Icon name="search" size={22} color={Colors.grey} />
        <TextInput
          disabled={refreshing}
          autoCapitalize="none"
          autoCorrect={false}
          value={keyword}
          placeholder={`Search in ${totalCount ? `${totalCount} ` : ""}photos`}
          style={OwnStyles.searchInputStyle}
          onChangeText={(text) => {
            if (refreshing) {
              return false;
            }

            photoListContext.handleSearch(text, photoListContext);
          }}
          placeholderTextColor={Colors.grey}
          returnKeyType="done"
        />
      </View>

      <View style={OwnStyles.clearContainer}>
        {keyword ? (
          <TouchableOpacity
            disabled={refreshing}
            style={OwnStyles.clearButtonContainer}
            hitSlop={Styles.hitSlop10}
            onPress={() => photoListContext.handleSearch("", photoListContext)}
          >
            <View>
              <Icon name="x" size={24} color={Colors.secondary} />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default PhotoSearchInput;
