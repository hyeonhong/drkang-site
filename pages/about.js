import { Container, Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import ContentWrapper from 'components/ContentWrapper'
import DrKang from 'components/DrKang'
import Facilities from 'components/Facilities'

const About = ({ texts }) => {
  const components = [DrKang, Facilities]

  return (
    <Container>
      <Box sx={{ marginBottom: 8 }} />
      <ContentWrapper tabLabels={texts.tabLabels} components={components} />
    </Container>
  )
}

About.displayName = 'About'

export default withTexts(About)
