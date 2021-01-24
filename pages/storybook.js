// import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Alert } from '@material-ui/core'
// import CloseIcon from '@material-ui/icons/Close'
import { FacebookButton, GoogleButton } from 'components/SignInButtons'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(4)
  }
}))

export default function Storybook() {
  const classes = useStyles()

  return (
    <Box className={classes.spacing}>
      <Box sx={{ margin: 8 }} />
      <FacebookButton />
      <Box sx={{ margin: 8 }} />
      <GoogleButton />
      <Box sx={{ margin: 8 }} />

      <Alert severity="error">This is an error alert — check it out!</Alert>
    </Box>
  )
}
