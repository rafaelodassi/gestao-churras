export const setItem = <T>(key: string, value: T): T => {
  localStorage.setItem(key, JSON.stringify(value || []));

  return getItem<T>(key);
};

export const getItem = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
