import create from "zustand";
import { persist } from "zustand/middleware";
import localforage from "localforage";

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'zustand-persist-bug',
  version: 1.0,
  storeName: 'zustand-persist-bug',
});

const storage = {
  getItem: async (name) => {
    return await localforage.getItem(name);
  },
  setItem: async (name, value) => {
    await localforage.setItem(name, value);
  }
};

export const useStore = 
  create(persist((set) => ({
    birds: 0,
    increaseBirds: () => set((state) => ({ birds: state.birds + 1 })),
    bears: 0,
    increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  }), { name: "zustand-persist-bug", version: 1, getStorage: () => storage, whitelist: ["bears"] }),
);
