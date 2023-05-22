import { createContext } from "react";

import { ThemeContextType } from "./themeContext.type";

export const ThemeContext = createContext<ThemeContextType | null>(null);


