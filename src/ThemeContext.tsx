import {createContext, useState, useEffect} from "react"
import type {ReactNode} from "react"

export const ThemeContext = createContext<{
    theme: string;
    setTheme: (theme: string) => void
}>({theme: "", setTheme: ()=>{}})

export function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState(()=>{return localStorage.getItem("theme") || ""})


useEffect(()=>{
    localStorage.setItem("theme", theme)
}, [theme])

return <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
</ThemeContext.Provider>

}