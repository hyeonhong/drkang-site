import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Snackbar, Collapse, Alert, IconButton, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(4)
  }
}))

export default function Storybook() {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Box className={classes.spacing}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true)
        }}
      >
        Re-open
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true)
        }}
      >
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  )
}
