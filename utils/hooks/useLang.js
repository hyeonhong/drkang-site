import { useContext, useState } from 'react'
import LangContext from 'utils/context/LangContext'

export function LangProvider({ children }) {
  const defaultLang = 'en'
  const [lang, setLang] = useState(defaultLang)

  function switchLang(selected) {
    const langOptions = {
      English: 'en',
      Korean: 'kr'
    }
    setLang(langOptions[selected] || defaultLang)
  }

  return <LangContext.Provider value={{ lang, switchLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
