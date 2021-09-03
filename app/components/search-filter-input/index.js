import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import defaultTexts from "../../../../assets/data/default-texts.json";
import Colors from "../../../../assets/data/color-list.json";
import Styles from "../../../../config/styles";
import OwnStyles from "./styles";

function SearchFilterInput({ listContext = {}, placeholder = defaultTexts.search }) {
  const { keyword, refreshing } = listContext;

  return (
    <View style={[OwnStyles.container, Styles.shadowForWhite]}>
      <View style={[Styles.f1, Styles.fdRow]}>
        <Icon name="search" size={22} color={Colors.grey} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={keyword}
          placeholder={placeholder}
          style={[OwnStyles.searchInputStyle, refreshing && Styles.opacityHalf]}
          onChangeText={(text) => {
            if (refreshing) {
              return false;
            }

            listContext.handleSearch(text, listContext);
          }}
          placeholderTextColor={Colors.grey}
          disabled={refreshing}
        />
      </View>

      <View style={[Styles.f0, Styles.fdRow, Styles.jcEnd]}>
        {keyword ? (
          <TouchableOpacity
            style={[Styles.mr15, Styles.fdRow, Styles.algiCenter]}
            hitSlop={Styles.hitSlop10}
            onPress={() => listContext.handleSearch("", listContext)}
          >
            <View>
              <Icon name="x" size={24} color={Colors.grey} />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default SearchFilterInput;
