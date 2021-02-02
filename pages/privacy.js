import { Container, Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Privacy from 'components/Privacy'

const PrivacyPage = ({ texts }) => (
  <Container>
    <Box sx={{ marginBottom: 8 }} />
    <Typography variant="h4" sx={{ marginBottom: 8 }}>
      {texts.title}
    </Typography>
    <Privacy />
    <Box sx={{ marginBottom: 16 }} />
  </Container>
)

PrivacyPage.displayName = 'PrivacyPage'

export default withTexts(PrivacyPage)
