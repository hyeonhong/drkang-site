import { useState } from 'react'
import {
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'

import { useAuth } from 'utils/auth/firebaseClient'
import withTexts from 'utils/hoc/withTexts'
import { useLang } from 'utils/hook/useLang'
import { validateEmail } from 'lib/validateEmail'

const CustomDialog2 = ({ open, handleClose, texts }) => {
  const { getAuthInstance, resetPassword } = useAuth()
  const { lang } = useLang()

  const [states, setStates] = useState({
    email: '',
    snackbarOpen: false,
    snackbarContent: 'success'
  })

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setStates({ ...states, snackbarOpen: false })
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={states.snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={states.snackbarContent}>
          {states.snackbarContent === 'success' ? texts.snackbarSuccess : texts.snackbarError}
        </Alert>
      </Snackbar>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {texts.title}</DialogTitle>

        <DialogContent>
          <DialogContentText>{texts.content}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={texts.fieldLabel}
            type="email"
            value={states.email}
            onChange={(e) => setStates({ ...states, email: e.target.value })}
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              const isValidEmail = validateEmail(states.email)
              if (isValidEmail) {
                const firebaseAuth = getAuthInstance()
                if (lang === 'kr') {
                  firebaseAuth.languageCode = 'ko'
                }

                resetPassword(states.email)
                  .then(() => setStates({ ...states, snackbarOpen: true, email: '' }))
                  .catch(() => {
                    setStates({
                      ...states,
                      snackbarContent: 'error',
                      snackbarOpen: true,
                      email: ''
                    })
                  })
              } else {
                setStates({ ...states, snackbarContent: 'error', snackbarOpen: true, email: '' })
              }

              handleClose()
            }}
          >
            {texts.confirmReset}
          </Button>
          <Button onClick={() => handleClose()}>{texts.cancelReset}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

CustomDialog2.displayName = 'CustomDialog2'

export default withTexts(CustomDialog2)
