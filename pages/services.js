import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import MdxContainer from 'components/MdxContainer'
import DrKang from 'mdx/DrKang.mdx'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(10)
  }
}))

const Services = ({ texts }) => {
  const classes = useStyles()

  const components = [DrKang]

  return (
    <>
      <Box className={classes.spacing} />
      <MdxContainer tabs={texts.tabLabels} components={components} />
    </>
  )
}

Services.displayName = 'Services'

export default withTexts(Services)
