import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItem(key, value) {
  await AsyncStorage.setItem(key, value);
}

export async function getItem(key) {
  const val = await AsyncStorage.getItem(key);
  try {
    if (val !== null || val !== "") {
      return val;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error");
  }
}

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

export async function multiRemove(keys) {
  try {
    AsyncStorage.multiRemove(keys);
    return true;
  } catch (exception) {
    return false;
  }
}
