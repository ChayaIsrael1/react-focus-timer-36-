import { useContext,createContext } from "react";

const ThemeContext =createContext('light')

function useThemeContext(){
    return useContext(ThemeContext)
}

export {ThemeContext, useThemeContext}