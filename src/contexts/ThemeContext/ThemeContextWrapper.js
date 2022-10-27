import React, { useState } from 'react';
import { useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

const ThemeContextWrapper = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark-content');
                break;
            case themes.light:
            default:
                document.body.classList.remove('dark-content');
                break;
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextWrapper;