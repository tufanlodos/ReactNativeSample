import createDataContext from "./createDataContext";
import * as PhotoService from "../api/photo";
import defaultMessages from "../assets/data/default-messages.json";
import { CONSTANTS } from "../config/configurations";

const initialState = {
  initialized: false,
  refreshing: true,
  errorMessage: null,
  photos: [],
  totalCount: null,
  index: 1,
  count: 15,
  keyword: null
};

let searchWaiting = null;

const photoListReducer = (state, action) => {
  switch (action.type) {
    case "setInitialized":
      return { ...state, initialized: action.payload };
    case "setRefreshing":
      return { ...state, refreshing: action.payload };
    case "setErrorMessage":
      return { ...state, errorMessage: action.payload };
    case "setPhotos":
      return {
        ...state,
        photos: action.payload.reset
          ? action.payload.photos
          : [...state.photos, ...action.payload.photos],
        totalCount: action.payload.totalCount,
        index: action.payload.reset ? initialState.index + 1 : state.index + 1,
        errorMessage: initialState.errorMessage
      };
    case "setKeyword":
      return { ...state, keyword: action.payload };
    case "resetContext":
      return initialState;
    default:
      return state;
  }
};

function getPhotos(dispatch) {
  return async (reset, index, count, keyword, callback) => {
    dispatch({ type: "setRefreshing", payload: true });

    try {
      const response = await PhotoService.getPhotos(
        reset ? initialState.index : index,
        count,
        keyword
      );

      if (response?.stat === "ok") {
        // TODO ok tu di deyir
        dispatch({
          type: "setPhotos",
          payload: {
            photos: response?.photos?.photo ?? initialState.photos,
            totalCount: response?.total ?? initialState.totalCount,
            reset
          }
        });
      } else {
        dispatch({ type: "setErrorMessage", payload: response?.message ?? defaultMessages.error });
      }
    } catch (error) {
      dispatch({ type: "setErrorMessage", payload: error?.message ?? defaultMessages.error });
    } finally {
      dispatch({ type: "setRefreshing", payload: false });

      if (reset) {
        dispatch({ type: "setInitialized", payload: true });
      }

      callback?.();
    }
  };
}

function handleSearch(dispatch) {
  return (text, photoListContext, callback) => {
    const { state } = photoListContext;

    dispatch({ type: "setKeyword", payload: text });

    if (searchWaiting) {
      clearTimeout(searchWaiting);
    }

    searchWaiting = setTimeout(() => {
      searchWaiting = null;
      photoListContext.getPhotos(true, state, text);
    }, CONSTANTS.FILTER_SEARCH_DELAY_MS);

    callback?.();
  };
}

const resetContext = (dispatch) => {
  return (callback) => {
    dispatch({ type: "resetContext" });
    callback?.();
  };
};

export const { Context, Provider } = createDataContext(
  photoListReducer,
  { getPhotos, handleSearch, resetContext },
  initialState
);
