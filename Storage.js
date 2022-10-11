import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

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
export const removeData = async () => {
    try {
      alert('are you sure ')
      await AsyncStorage.removeItem('@' + item);
      
    } catch (e) {
      // remove Error
    }
    console.log('Done.....')
};
export const logDataset = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + key, jsonValue);
    // alert(jsonValue);
  } catch (e) {

  }
};
export const logDataget = async (key) => {
  try {
    // alert(key);
    const jsonValue = await AsyncStorage.getItem('@' + key);
    // alert(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {}
};
