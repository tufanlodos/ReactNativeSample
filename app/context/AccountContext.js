import createDataContext from "./createDataContext";
import { getStorageData, storeStorageData, removeStorageData } from "../lib/storage-operations";
import { ASYNC_STORAGE_KEYS } from "../config/configurations";

const initialState = {
  ready: false,
  data: null
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "set_account":
      return { ...state, data: action.payload, ready: true };
    case "clear_account":
      return initialState;
    default:
      return state;
  }
};

const setAccount = (dispatch) => {
  // only triggered after login operation and MainTab initialization
  return async (data, callback) => {
    let userData;
    if (data) {
      userData = data;
      await storeStorageData(ASYNC_STORAGE_KEYS.ACCOUNT_ITEM, userData);
    } else {
      userData = await getStorageData(ASYNC_STORAGE_KEYS.ACCOUNT_ITEM);
    }

    dispatch({ type: "set_account", payload: userData });

    callback?.();
  };
};

const clearAccount = (dispatch) => {
  // only triggered after logout operation
  return async (callback) => {
    await removeStorageData(ASYNC_STORAGE_KEYS.ACCOUNT_ITEM);
    dispatch({ type: "clear_account" });

    callback?.();
  };
};

export const { Context, Provider } = createDataContext(
  accountReducer,
  {
    setAccount,
    clearAccount
  },
  initialState
);
