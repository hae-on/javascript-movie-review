import type { Modal } from "../types/type";

export const getSavedData = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error(`parse 불가능한 문자열입니다: ${error}`);
    }
  }

  return [];
};

export const saveData = (key: string, data: Modal) =>
  localStorage.setItem(key, JSON.stringify(data));
