function scrollToTopOfFlatList(flatListRef) {
  flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
}

function getFlickrUrl(photo) {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

export { getFlickrUrl, scrollToTopOfFlatList };
