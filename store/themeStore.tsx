import { create } from "zustand";

type Store = {
  isDarkModeEnabled: boolean;
};

type Action = {
  toggleDarkMode: () => void;
};

export const useThemeStore = create<Store & Action>()((set) => ({
  isDarkModeEnabled: getThemeModeBySystem(),
  toggleDarkMode: () =>
    set((state) => ({ isDarkModeEnabled: !state.isDarkModeEnabled })),
}));



function getThemeModeBySystem(){
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    return true
  }
  return false

}