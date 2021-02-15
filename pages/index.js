import { Typography, Box, Container, Paper } from '@material-ui/core'

import { fetchStrapiAPI } from 'lib/strapi'
import withTexts from 'utils/hoc/withTexts'
import MarkdownContent from 'components/MarkdownContent'
import Map from 'components/Map'

const HomePage = ({ texts, announcement }) => {
  return (
    <main>
      <Box
        sx={{
          backgroundImage: 'url("/assets/images/joseph-gonzalez-unsplash.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          width: '100%',
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h4"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.32)', color: 'white', padding: 2 }}
        >
          {texts.heroText}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 8 }} />
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
          {texts.announcement}
        </Typography>
        <Box sx={{ marginBottom: 4 }} />
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h6">{announcement.title}</Typography>
          <Box sx={{ marginBottom: 4 }} />
          <MarkdownContent source={announcement.content} />
        </Paper>
      </Container>
      <Box sx={{ marginBottom: 8 }} />
      <Map />
      <Box sx={{ marginBottom: 2 }} />
    </main>
  )
}

export async function getStaticProps({ params }) {
  const announcement = await fetchStrapiAPI('/announcement')

  return {
    props: { announcement },
    revalidate: 1
  }
}

HomePage.displayName = 'HomePage'

export default withTexts(HomePage)
