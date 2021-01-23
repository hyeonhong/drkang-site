import { makeStyles } from '@material-ui/core/styles'
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Terms from 'components/Terms'
import Privacy from 'components/Privacy'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(0, 4, 4)
  }
}))

const CustomDialog = ({ open, handleClose, content, texts }) => {
  const classes = useStyles()

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <DialogTitle> {content === 'terms' ? texts.termsTitle : texts.privacyTitle}</DialogTitle>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            {texts.closeWindow}
          </Button>
        </DialogActions>
      </Box>

      <DialogContent className={classes.content}>
        {content === 'terms' ? <Terms /> : <Privacy />}
      </DialogContent>
    </Dialog>
  )
}

CustomDialog.displayName = 'CustomDialog'

export default withTexts(CustomDialog)
