import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, Text } from "react-native";
import NotFound from "../../../../components/not-found";
import PhotoListItem from "../photo-list-item";
import useIsMounted from "../../../../hooks/useIsMounted";
import { Context as PhotoListContext } from "../../../../context/PhotoListContext";
import Styles from "../../../../config/styles";
import Colors from "../../../../assets/data/color-list.json";

const PhotoList = () => {
  const [onEndReachedCalledDuringMomentum, setonEndReachedCalledDuringMomentum] = useState(true);
  const isMounted = useIsMounted();

  const photoListContext = useContext(PhotoListContext);
  const {
    initialized,
    refreshing,
    errorMessage,
    index,
    count,
    keyword,
    photos
  } = photoListContext.state;

  useEffect(() => {
    photoListContext.getPhotos(true, index, count, keyword);

    return () => photoListContext.resetContext();
  }, []);

  if (errorMessage) {
    <View style={Styles.mt30}>
      <Text style={Styles.errorText}>{errorMessage}</Text>
    </View>;
  }

  if (!initialized && refreshing) {
    return (
      <View style={Styles.mt30}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <NotFound visible={initialized && photos.length === 0} />

      <FlatList
        style={[Styles.mt10, Styles.f1]}
        data={photos}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => photoListContext.getPhotos(true, index, count, keyword)}
            colors={[Colors.primary]}
          />
        }
        onEndReached={() =>
          !refreshing &&
          !onEndReachedCalledDuringMomentum &&
          photoListContext.getPhotos(
            false,
            index,
            count,
            keyword,
            () => isMounted.current && setonEndReachedCalledDuringMomentum(true)
          )
        }
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={() =>
          isMounted.current && setonEndReachedCalledDuringMomentum(false)
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PhotoListItem photo={item} />}
      />
    </>
  );
};

export default PhotoList;
