import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Terms from 'components/Terms'
import Privacy from 'components/Privacy'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4)
  }
}))

const CustomDialog = ({ open, handleClose, content, texts }) => {
  const classes = useStyles()

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> {content === 'terms' ? texts.termsTitle : texts.privacyTitle}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Close Window</Button>
      </DialogActions>

      <DialogContent className={classes.content}>
        {content === 'terms' ? <Terms /> : <Privacy />}
      </DialogContent>
    </Dialog>
  )
}

CustomDialog.displayName = 'CustomDialog'

export default withTexts(CustomDialog)
