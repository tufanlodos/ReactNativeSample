import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, Text } from "react-native";
import NotFound from "../../../../components/not-found";
import useIsMounted from "../../../../hooks/useIsMounted";
import { Context as PhotoListContext } from "../../../../context/PhotoListContext";
import Styles from "../../../../config/styles";
import Colors from "../../../../assets/data/color-list.json";

const PhotoList = () => {
  const [onEndReachedCalledDuringMomentum, setonEndReachedCalledDuringMomentum] = useState(true);
  const isMounted = useIsMounted();

  const photoListContext = useContext(PhotoListContext);
  const { initialized, refreshing, index, count, keyword, photos } = photoListContext.state;

  useEffect(() => {
    photoListContext.getPhotos(true, index, count, keyword);

    return () => photoListContext.resetContext();
  }, []);

  if (initialized === false && refreshing) {
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
        style={[Styles.mt10, Styles.f0]}
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
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
      />
    </>
  );
};

export default PhotoList;
