// import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Alert } from '@material-ui/core'
// import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(4)
  }
}))

export default function Storybook() {
  const classes = useStyles()

  return (
    <Box className={classes.spacing}>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="body1" display="inline" sx={{ flex: 1 }}>
          Left
        </Typography>
        <Typography variant="body1" display="inline">
          Center
        </Typography>
        <Box sx={{ flex: 1 }} />
      </Box>

      <Alert severity="error">This is an error alert — check it out!</Alert>
    </Box>
  )
}
