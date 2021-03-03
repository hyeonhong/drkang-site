import { useRouter } from 'next/router'
import {
  useMediaQuery,
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Divider
} from '@material-ui/core'
import { NextSeo, BlogJsonLd } from 'next-seo'

import withTexts from 'utils/hoc/withTexts'
import { fetchStrapiAPI } from 'lib/strapi'
import MarkdownContent from 'components/MarkdownContent'
import Date from 'components/Date'

const SinglePost = ({ texts, post, categories }) => {
  const router = useRouter()

  // const imageUrl = getStrapiMedia(post.image)
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Container>
      <NextSeo
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://drkangclinic.com/post/${post.slug}`,
          type: 'article',
          article: {
            publishedTime: post.published_at,
            modifiedTime: post.updated_at,
            authors: ['강의원']
            // tags: ['Tag A', 'Tag B', 'Tag C']
          }
        }}
      />
      <BlogJsonLd
        url={`https://drkangclinic.com/post/${post.slug}`}
        title={post.title}
        datePublished={post.published_at}
        dateModified={post.updated_at}
        authorName="강의원"
        description={post.description}
      />
      <Box sx={{ marginBottom: 8 }} />
      <Box sx={{ textAlign: 'center' }}>
        <Paper
          sx={{ padding: isMobile ? 4 : 8, display: 'inline-block', textAlign: 'left' }}
          elevation={3}
        >
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

        <Box sx={{ marginBottom: 12 }} />
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
        <Box sx={{ marginBottom: 16 }} />
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
