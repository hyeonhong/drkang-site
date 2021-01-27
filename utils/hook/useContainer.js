import { useContext, useState } from 'react'
import { Container } from '@material-ui/core'
import ContainerContext from 'utils/context/ContainerContext'

export function ContainerProvider({ children }) {
  const [containerSettings, setContainerSettings] = useState({
    maxWidth: 'lg',
    disableGutters: false
  })

  return (
    <ContainerContext.Provider value={{ containerSettings, setContainerSettings }}>
      <Container
        maxWidth={containerSettings.maxWidth}
        disableGutters={containerSettings.disableGutters}
      >
        {children}
      </Container>
    </ContainerContext.Provider>
  )
}

export function useContainer() {
  return useContext(ContainerContext)
}
