export type IsDark = boolean;

export type ThemeContextType = {
    isDark: IsDark,
    setIsDark: (theme: IsDark) => void,
}