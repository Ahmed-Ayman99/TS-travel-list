import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useLocalStorage = <T,>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const val: string | null = localStorage.getItem(key);
    return val ? JSON.parse(val) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
