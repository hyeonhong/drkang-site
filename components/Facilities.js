import Image from 'next/image'
// import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import withTexts from 'utils/hoc/withTexts'

// const useStyles = makeStyles((theme) => ({}))

const Facilities = ({ texts }) => {
  // const classes = useStyles()

  const imageSrcs = [
    '/assets/images/street-view.jpg',
    '/assets/images/entrance.jpg',
    '/assets/images/lobby.jpg',
    '/assets/images/skin-treatments.jpg'
  ]

  return (
    <Container>
      <Typography variant="h5">의료시설</Typography>
      <Box sx={{ marginBottom: 8 }} />

      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {imageSrcs.map((src, i) => (
          <Image key={i} src={src} alt={'a'} width={1024} height={682.66} />
        ))}
      </Carousel>

      <Box sx={{ marginBottom: 8 }} />
    </Container>
  )
}

Facilities.displayName = 'Facilities'

export default withTexts(Facilities)
