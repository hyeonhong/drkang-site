import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import MdxContainer from 'components/MdxContainer'
import Services from 'mdx/Services.mdx'
import OfficeHours from 'mdx/OfficeHours.mdx'
import NonReimbursement from 'mdx/NonReimbursement.mdx'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(10)
  }
}))

const ServicesPage = ({ texts }) => {
  const classes = useStyles()

  const components = [Services, OfficeHours, NonReimbursement]

  return (
    <>
      <Box className={classes.spacing} />
      <MdxContainer tabLabels={texts.tabLabels} components={components} />
    </>
  )
}

ServicesPage.displayName = 'ServicesPage'

export default withTexts(ServicesPage)
