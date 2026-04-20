"use client"

import {createContext, useContext, useEffect, useState} from "react"

type Theme = "light" | "dark"
type UiContextType = {
  theme: Theme
  toggleTheme: () => void
  changeFontScale: (value:string) => void
}

const UiContext = createContext<UiContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [fontScale, setFontScale] = useState<number>(1);

    const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // localStorage 확인
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedFontScale = localStorage.getItem("fontScale")
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      // 시스템 설정 확인
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const systemTheme = prefersDark ? "dark" : "light"
      setTheme(systemTheme)
      document.documentElement.classList.toggle("dark", prefersDark)
    }

    if(savedFontScale){
      const parsed = Number(savedFontScale)
      setFontScale(parsed)
      document.documentElement.style.setProperty("--font-scale", parsed.toString())
    } 

  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark" //*state 변경 전 다음 상태를 변수로 만들어 쓴다.
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const changeFontScale = (size:string) => {
    let newFontScale = fontScale; //*state 변경 전 다음 상태를 변수로 만들어 쓴다.
    if(size == 'up'){
      newFontScale = fontScale + 0.1;
    } else {
      if(newFontScale > 0.8){
        newFontScale = fontScale - 0.1;
      } else {
        alert('가장 작은 글자 사이즈입니다.')
      }
    }
    setFontScale(newFontScale)
    localStorage.setItem("fontScale", newFontScale.toString())
    document.documentElement.style.setProperty("--font-scale", newFontScale.toString())
  }
  

  return (
    <UiContext.Provider value={{ theme, toggleTheme, changeFontScale }}>
      {children}
    </UiContext.Provider>
  )
}

export const useUi = () => {
  const context = useContext(UiContext)
  if (!context) throw new Error("useTheme must be used inside ThemeProvider")
  return context
}