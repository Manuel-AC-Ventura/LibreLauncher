import { useState, useEffect } from 'react';
import localforage from 'localforage';

export const useLocalForage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const fetchValue = async () => {
      let val = await localforage.getItem(key);
      if (val === null) {
        val = initialValue;
        await localforage.setItem(key, initialValue);
      }
      setValue(val);
    };

    fetchValue();
  }, [key, initialValue]);

  const setItem = async (newValue) => {
    await localforage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, setItem];
};
