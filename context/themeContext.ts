import { createContext } from "react";

// export type Theme = 'light' | 'dark';
export type IsDark = boolean;

export type ThemeContextType = {
    isDark: IsDark,
    setIsDark: (theme: IsDark) => void,
}

export const ThemeContext = createContext<ThemeContextType | null>(null);


