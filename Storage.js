import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + key, jsonValue);
    // alert(jsonValue);
  } catch (e) {

  }
};

export const getData = async (key) => {
  try {
    // alert(key);
    const jsonValue = await AsyncStorage.getItem('@' + key);
    // alert(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {}
};
const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@' + key);
      
    } catch (e) {}
};
