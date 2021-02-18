// import { useState } from 'react'
// import Image from 'next/image'
// import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Typography } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   spacing: {
//     marginBottom: theme.spacing(4)
//   }
// }))

export default function Storybook() {
  // const classes = useStyles()

  return (
    <Container>
      {/* <Box sx={{ display: 'flex' }}>
        <Typography variant="body1" display="inline" sx={{ flex: 1 }}>
          Left
        </Typography>
        <Typography variant="body1" display="inline">
          Center
        </Typography>
        <Box sx={{ flex: 1 }} />
      </Box> */}

      <Box sx={{ marginBottom: 4 }} />

      <Typography variant="h6" display="inline">
        one
      </Typography>
      <Typography variant="h6" display="inline">
        two
      </Typography>
    </Container>
  )
}
