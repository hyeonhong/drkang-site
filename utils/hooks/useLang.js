import { useContext, useState } from 'react'
import LangContext from 'utils/context/LangContext'

export function LangProvider({ children }) {
  let storedValue
  if (typeof window !== 'undefined') {
    storedValue = localStorage.getItem('lang')
  }
  const defaultLang = storedValue || 'en'
  const [lang, setLang] = useState(defaultLang)

  function switchLang(selected) {
    localStorage.setItem('lang', selected)
    setLang(selected)
  }

  return <LangContext.Provider value={{ lang, switchLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
