"use client"


import { create } from "zustand";

type Store = {
  isDarkModeEnabled: boolean;
};

type Action = {
  toggleDarkMode: () => void,
  updateThemeMode:(arg0: boolean)=>void
};

export const useThemeStore = create<Store & Action>()((set) => ({
  isDarkModeEnabled: false,
  toggleDarkMode: () =>
    set((state) => ({ isDarkModeEnabled: !state.isDarkModeEnabled })),
  updateThemeMode:(isDarkMode:boolean)=>set((state)=>({isDarkModeEnabled:isDarkMode}))
}));



