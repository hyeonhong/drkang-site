import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import MdxContainer from 'components/MdxContainer'
import DrKang from 'mdx/DrKang.mdx'
import Facilities from 'mdx/Facilities.mdx'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(10)
  }
}))

const IntroPage = ({ texts }) => {
  const classes = useStyles()

  const components = [DrKang, Facilities]

  return (
    <>
      <Box className={classes.spacing} />
      <MdxContainer tabLabels={texts.tabLabels} components={components} />
    </>
  )
}

IntroPage.displayName = 'IntroPage'

export default withTexts(IntroPage)
