import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '100%'
    padding: theme.spacing(4)
  },
  text: {
    whiteSpace: 'pre',
    lineHeight: 2.5
  }
}))

const BioPaper = ({ texts }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        {texts.bio}{' '}
      </Typography>
    </Paper>
  )
}

BioPaper.displayName = 'BioPaper'

export default withTexts(BioPaper)
