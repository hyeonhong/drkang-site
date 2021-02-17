import Image from 'next/image'
// import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Carousel from 'components/Carousel'

// const useStyles = makeStyles((theme) => ({}))

const Facilities = ({ texts }) => {
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
      <Typography variant="h5">의료시설</Typography>
      <Box sx={{ marginBottom: 8 }} />

      <Carousel stopAutoPlayOnHover={false}>
        {items.map((item, i) => {
          const filename = item.src.split('/').pop().split('.')[0]

          return (
            <Box key={i} sx={{ textAlign: 'center' }}>
              <Image src={item.src} alt={filename} width={600} height={400} />
            </Box>
          )
        })}
      </Carousel>
      <Box sx={{ marginBottom: 8 }} />
    </Container>
  )
}

Facilities.displayName = 'Facilities'

export default withTexts(Facilities)
