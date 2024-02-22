import {   ReactNode, createContext, useContext, useState } from "react";

export interface ThemeContextType {
  theme: "light" | "dark" |string ;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark" | string>>;
}
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {}
});

export const useThemeContext = ()=> {
  return useContext(ThemeContext);
};


export default function ThemeProviders({children}:{children:ReactNode}) {
  
    const [theme, setTheme] = useState("dark")
  
    return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}