import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, Text } from "react-native";
import NotFound from "../not-found";
import useIsMounted from "../../hooks/useIsMounted";
import { Context as PhotoListContext } from "../../context/PhotoListContext";
import Styles from "../../config/styles";
import Colors from "../../assets/data/color-list.json";

const PhotoList = () => {
  const photoListContext = useContext(PhotoListContext);
  const [onEndReachedCalledDuringMomentum, setonEndReachedCalledDuringMomentum] = useState(true);
  const isMounted = useIsMounted();

  useEffect(() => {
    photoListContext.getPhotos(
      true,
      photoListContext.state.index,
      photoListContext.state.count,
      photoListContext.state.keyword
    );
  }, []);

  return (
    <>
      {photoListContext.state.initialized === false && photoListContext.state.refreshing ? (
        <View style={Styles.mt30}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <>
          <NotFound
            visible={
              photoListContext.state.initialized && photoListContext.state.photos.length === 0
            }
          />
          <FlatList
            style={[Styles.mt10, Styles.f0]}
            data={photoListContext.state.photos}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={photoListContext.state.refreshing}
                onRefresh={() =>
                  photoListContext.getPhotos(
                    true,
                    photoListContext.state.index,
                    photoListContext.state.count,
                    photoListContext.state.keyword
                  )
                }
                colors={[Colors.primary]}
              />
            }
            onEndReached={() =>
              !photoListContext.state.refreshing &&
              !onEndReachedCalledDuringMomentum &&
              photoListContext.getPhotos(
                false,
                photoListContext.state.index,
                photoListContext.state.count,
                photoListContext.state.keyword,
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
      )}
    </>
  );
};

export default PhotoList;
