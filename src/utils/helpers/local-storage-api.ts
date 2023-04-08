export const getValueLocalStorage = () => localStorage.getItem('inputValue') || '';
export const setItemLocalStorage = (value: string) => localStorage.setItem('inputValue', value);
