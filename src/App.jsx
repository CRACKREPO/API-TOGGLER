import { useState } from 'react'
import {ThemeContextProvider} from './context/themeOrigin'
import {Toggler} from './components/toggler'

function App() {
  const [themeMode, setThemeMode]=useState('light');

  const darkTheme= () => {
    setThemeMode('dark');
  }

  const lightTheme= () => {
    setThemeMode('light')
  }
  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className={`${themeMode === 'dark' ? 'bg-black' : 'bg-white'} h-screen`}>
    <div className={`${themeMode === 'dark' ? 'bg-white' : 'bg-black'} fixed top-0 h-80 w-160`}></div>
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4"><Toggler/></div>
    <div className={`${themeMode === 'dark' ? 'bg-white' : 'bg-black'} fixed bottom-0
    right-0 h-71 w-160`}></div>
    </div>
    </ThemeContextProvider>
  )
}

export default App
