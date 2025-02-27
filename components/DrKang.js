import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery, Paper, Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import { useLang } from 'utils/hook/useLang'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  text: {
    whiteSpace: 'pre-wrap',
    lineHeight: 2.5
  }
}))

const DrKang = ({ texts }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        {texts.meetDrKang}
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        {texts.drKang}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile || useLang().lang !== 'kr' ? 'column' : 'row'
        }}
      >
        <div style={{ width: isMobile ? '100%' : '50%' }}>
          <Image
            layout="responsive"
            src="/assets/images/drkang-portrait-v2.jpg"
            alt="DrKang"
            width="400"
            height="600"
          />
        </div>
        <Paper className={classes.root}>
          <Typography variant="body1" className={classes.text}>
            {texts.bio}{' '}
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ marginBottom: 16 }} />
    </>
  )
}

DrKang.displayName = 'DrKang'

export default withTexts(DrKang)
