import { Container, Box, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import Map from 'components/Map'

const Directions = ({ texts }) => {
  return (
    <Container>
      <Box sx={{ marginBottom: 4 }} />
      <Typography variant="h5" sx={{ marginBottom: 8 }}>
        {'찾아오시는 길'}
      </Typography>
      <Map />
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{'주소'}</Typography>
      <hr />
      <Typography variant="body1">
        {'경기 고양시 일산동구 중앙로1275번길 38-10 우림로데오스위트 209호'}
      </Typography>
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{'주차'}</Typography>
      <hr />
      <Typography variant="body1">
        {'우림로데오스위트 지하 주차장(지하 1-4층) 주차 가능'}
      </Typography>
      <Box sx={{ marginBottom: 6 }} />
      <Typography variant="h6">{'대중교통'}</Typography>
      <hr />
      <Typography variant="body1">{'지하철 3호선 정발산역 2번출구 앞 도보 3분'}</Typography>
      <Box sx={{ marginBottom: 16 }} />
    </Container>
  )
}

Directions.displayName = 'Directions'

export default withTexts(Directions)
