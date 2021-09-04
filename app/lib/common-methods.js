function scrollToTopOfFlatList(flatListRef) {
  flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
}

function getFlickrUrl(photo) {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}

function getHumanReadableDateTime(timestamp) {
  const date = new Date(timestamp * 1000);

  const dd = date.getDate().toString().padStart(2, "0");
  const MM = (date.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const result = "dd/MM/yyyy";
  return `${result.replace("dd", dd).replace("MM", MM).replace("yyyy", yyyy)} ${hours}:${minutes}`;
}

export { getFlickrUrl, scrollToTopOfFlatList, getHumanReadableDateTime };
