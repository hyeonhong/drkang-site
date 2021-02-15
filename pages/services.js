import { Container, Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import ContentWrapper from 'components/ContentWrapper'
import Services from 'mdx/Services.mdx'
import OfficeHours from 'mdx/OfficeHours.mdx'
import NonReimbursement from 'mdx/NonReimbursement.mdx'

const ServicesPage = ({ texts }) => {
  const components = [Services, OfficeHours, NonReimbursement]

  return (
    <Container>
      <Box sx={{ marginBottom: 8 }} />
      <ContentWrapper tabLabels={texts.tabLabels} components={components} />
    </Container>
  )
}

ServicesPage.displayName = 'ServicesPage'

export default withTexts(ServicesPage)
