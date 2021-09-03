function scrollToTopOfFlatList(flatListRef) {
  flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
}

export { scrollToTopOfFlatList };
