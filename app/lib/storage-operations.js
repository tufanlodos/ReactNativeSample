import AsyncStorage from "@react-native-async-storage/async-storage";

const storeStorageData = async (keyName, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    return await AsyncStorage.setItem(keyName, jsonValue);
  } catch (e) {
    throw new Error(`An error occured when ${keyName} writing : ${JSON.stringify(e)}`);
  }
};

const getStorageData = async (keyName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`An error occured when ${keyName} reading : ${JSON.stringify(e)}`);
  }
};

const removeStorageData = async (keyName) => {
  try {
    return await AsyncStorage.removeItem(keyName);
  } catch (e) {
    throw new Error(`An error occured when ${keyName} removing : ${JSON.stringify(e)}`);
  }
};

export { getStorageData, storeStorageData, removeStorageData };
