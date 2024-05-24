import { create } from "zustand";

type Store = {
  isDarkModeEnabled: boolean;
};

type Action = {
  toggleDarkMode: () => void;
};

export const useThemeStore = create<Store & Action>()((set) => ({
  isDarkModeEnabled: true,
  toggleDarkMode: () =>
    set((state) => ({ isDarkModeEnabled: !state.isDarkModeEnabled })),
}));
