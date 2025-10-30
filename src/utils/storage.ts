// src/utils/storage.ts
export const storage = {
  get: (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  
  set: (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },
  
  remove: (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
  
  getJSON: (key: string) => {
    const item = storage.get(key);
    return item ? JSON.parse(item) : null;
  },
  
  setJSON: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  }
};