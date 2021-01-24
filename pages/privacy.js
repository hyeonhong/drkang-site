import { Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Privacy from 'components/Privacy'

const PrivacyPage = ({ texts }) => {
  return (
    <Box sx={{ marginTop: 8, marginBottom: 16 }}>
      <Typography variant="h4" sx={{ marginBottom: 8 }}>
        {texts.title}
      </Typography>
      <Privacy />
    </Box>
  )
}

PrivacyPage.displayName = 'PrivacyPage'

export default withTexts(PrivacyPage)
