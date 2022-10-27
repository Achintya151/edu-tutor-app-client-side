import { createContext } from 'react';
import './ThemeContext.css'

export const themes = {
    dark: "dark-content",
    light: "",
};

export const ThemeContext = createContext({
    theme: themes.light,
    changeTheme: () => { },
});
