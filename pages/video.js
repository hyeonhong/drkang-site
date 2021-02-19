import { Box, Typography, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import Video from 'components/Video'

export default function VideoPage(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ marginBottom: 8 }} />
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        {'SBS 생활경제뉴스 출현'}
      </Typography>
      <Video width={800} src="https://www.youtube.com/embed/1gQkgUvo-9A" />
      <Box sx={{ marginBottom: 16 }} />
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        {'Naver HiDoc 아토피 피부염 진료상담'}
      </Typography>
      <Video width={800} src="https://www.youtube.com/embed/ktFJikeqRw4" />
      <Box sx={{ marginBottom: 16 }} />
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        {'Naver HiDoc 영유아 진료상담 - BCC 접종'}
      </Typography>
      <Video width={800} src="https://www.youtube.com/embed/jkSy8cvKz6Q" />
      <Box sx={{ marginBottom: 8 }} />
      <Button
        variant="contained"
        startIcon={<FontAwesomeIcon icon={faYoutube} />}
        sx={{
          backgroundColor: '#ff0000',
          '&:hover': {
            backgroundColor: '#df0000'
          }
        }}
        href={'https://www.youtube.com/channel/UCAdyfbbDu3SlLN4dR4fuZdQ'}
      >
        {'YouTube 채널 바로 가기'}
      </Button>
      <Box sx={{ marginBottom: 16 }} />
    </Box>
  )
}
