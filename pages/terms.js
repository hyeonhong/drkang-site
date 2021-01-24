import { Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Terms from 'components/Terms'

const TermsPage = ({ texts }) => {
  return (
    <Box sx={{ marginTop: 8, marginBottom: 16 }}>
      <Typography variant="h4" sx={{ marginBottom: 8 }}>
        {texts.title}
      </Typography>
      <Terms />
    </Box>
  )
}

TermsPage.displayName = 'TermsPage'

export default withTexts(TermsPage)
