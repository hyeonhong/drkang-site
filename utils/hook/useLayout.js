import { useContext, useState } from 'react'
import { Container } from '@material-ui/core'
import LayoutContext from 'utils/context/LayoutContext'

export function LayoutProvider({ children }) {
  const [layoutConfigs, setLayoutConfigs] = useState({
    maxWidth: 'lg',
    disableGutters: false
  })

  return (
    <LayoutContext.Provider value={{ layoutConfigs, setLayoutConfigs }}>
      <Container maxWidth={layoutConfigs.maxWidth} disableGutters={layoutConfigs.disableGutters}>
        {children}
      </Container>
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  return useContext(LayoutContext)
}
