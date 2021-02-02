import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import MdxContainer from 'components/MdxContainer'
import DrKang from 'components/DrKang'
import Facilities from 'mdx/Facilities.mdx'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(10)
  }
}))

const About = ({ texts }) => {
  const classes = useStyles()

  const components = [DrKang, Facilities]

  return (
    <Container>
      <Box className={classes.spacing} />
      <MdxContainer tabLabels={texts.tabLabels} components={components} />
    </Container>
  )
}

About.displayName = 'About'

export default withTexts(About)
