/* eslint-disable import/no-unresolved */
import { API_URL, API_KEY } from "@env";

export async function getPhotos(index = 1, count = 15, keyword = null) {
  const response = await fetch(
    `${API_URL}services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&page=${index}&per_page=${count}&extras=description,date_upload,owner_name&text=${keyword}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "GET"
    }
  );
  const result = await response.json();
  return result;
}

export async function getPhoto() {
  return null;
}
