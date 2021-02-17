// import { useState } from 'react'
import Image from 'next/image'
// import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core'
import Carousel from 'components/Carousel'

// const useStyles = makeStyles((theme) => ({
//   spacing: {
//     marginBottom: theme.spacing(4)
//   }
// }))

export default function Storybook() {
  // const classes = useStyles()

  const items = [
    {
      src: '/assets/images/street-view.jpg'
    },
    {
      src: '/assets/images/entrance.jpg'
    },
    {
      src: '/assets/images/lobby.jpg'
    },
    {
      src: '/assets/images/skin-treatments.jpg'
    }
  ]

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

      <Carousel stopAutoPlayOnHover={false}>
        {items.map((item, i) => {
          const filename = item.src.split('/').pop().split('.')[0]

          return (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <Image src={item.src} alt={filename} width={800} height={533.33} />
            </Box>
          )
        })}
      </Carousel>
    </Container>
  )
}
