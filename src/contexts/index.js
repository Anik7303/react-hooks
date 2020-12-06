import { createContext } from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#ffffff",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
};

export const ThemeContext = createContext(themes.light);
