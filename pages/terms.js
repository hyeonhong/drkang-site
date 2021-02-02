import { Container, Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Terms from 'components/Terms'

const TermsPage = ({ texts }) => (
  <Container>
    <Box sx={{ marginBottom: 8 }} />
    <Typography variant="h4" sx={{ marginBottom: 8 }}>
      {texts.title}
    </Typography>
    <Terms />
    <Box sx={{ marginBottom: 16 }} />
  </Container>
)

TermsPage.displayName = 'TermsPage'

export default withTexts(TermsPage)
