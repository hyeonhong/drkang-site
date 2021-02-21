import { Container, Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Map from 'components/Map'

const Directions = ({ texts }) => {
  return (
    <Container>
      <Box sx={{ marginBottom: 4 }} />
      <Typography variant="h5" sx={{ marginBottom: 8 }}>
        {texts.directions}
      </Typography>
      <Map />
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{texts.addressLabel}</Typography>
      <hr />
      <Typography variant="body1">{texts.address}</Typography>
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{texts.parkingLabel}</Typography>
      <hr />
      <Typography variant="body1">{texts.parking}</Typography>
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{texts.publicTransitLabel}</Typography>
      <hr />
      <Typography variant="body1">{texts.publicTransit}</Typography>
      <Box sx={{ marginBottom: 16 }} />
    </Container>
  )
}

Directions.displayName = 'Directions'

export default withTexts(Directions)
