// import Layout from "../../components/layout";
// import Seo from "../../components/seo";
import { useRouter } from 'next/router'
import { Container, Paper, Box, Typography, Button, Divider } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import { fetchStrapiAPI } from 'lib/strapi'
import MarkdownContent from 'components/MarkdownContent'
import Date from 'components/Date'

const SinglePost = ({ texts, post, categories }) => {
  const router = useRouter()

  // const seo = {
  //   metaTitle: post.title,
  //   metaDescription: post.description,
  //   shareImage: post.image,
  //   post: true
  // }

  // const imageUrl = getStrapiMedia(post.image)

  return (
    // <Layout categories={categories}>
    //   <Seo seo={seo} />
    <Container>
      <Box sx={{ marginBottom: 8 }} />
      <Paper sx={{ padding: 4, display: 'inline-block' }}>
        <Typography variant="h5">{post.title}</Typography>
        <Box sx={{ marginBottom: 4 }} />
        <Divider />
        <Box sx={{ marginBottom: 2 }} />
        <Typography variant="body2" color="textSecondary">
          <Date dateString={post.published_at} />
        </Typography>
        <Box sx={{ marginBottom: 4 }} />
        <MarkdownContent source={post.content} />
      </Paper>

      <Box sx={{ marginTop: 12, marginBottom: 16, textAlign: 'center' }}>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={() => router.push('/post')}
        >
          {texts.backToBlog}
        </Button>
      </Box>
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = await fetchStrapiAPI('/posts')

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const posts = await fetchStrapiAPI(`/posts?slug=${params.slug}`)
  const categories = await fetchStrapiAPI('/categories')

  return {
    props: { post: posts[0], categories },
    revalidate: 1
  }
}

SinglePost.displayName = 'SinglePost'

export default withTexts(SinglePost)
