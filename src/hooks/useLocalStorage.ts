import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  serialize: (value: T) => string = JSON.stringify,
  deserialize: (value: string) => T = JSON.parse
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] =
    useState <
    T >
    (() => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? deserialize(storedValue) : defaultValue;
    });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
