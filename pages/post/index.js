import Link from 'next/link'
import { Container, Box, Paper, Typography } from '@material-ui/core'

import withTexts from 'utils/hoc/withTexts'
import { fetchStrapiAPI } from 'lib/strapi'
import ContentWrapper from 'components/ContentWrapper'
import Date from 'components/Date'

const Posts = ({ texts, posts, categories }) => {
  const PostLine = ({ post }) => (
    <Box sx={{ marginBottom: 4 }}>
      <Link href={`/post/${post.slug}`}>
        <a style={{ textDecoration: 'none' }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">{post.title}</Typography>
            <Box sx={{ marginBottom: 2 }} />
            <Typography variant="body2" color="textSecondary">
              <Date dateString={post.published_at} />
            </Typography>
          </Paper>
        </a>
      </Link>
    </Box>
  )

  const allPosts = () => posts.map((post) => <PostLine key={post.id} post={post} />)
  const postsByCategory = categories.map((category) => () =>
    category.posts.map((post) => <PostLine key={post.id} post={post} />)
  )

  const components = [allPosts, ...postsByCategory]

  return (
    <Container>
      <Box sx={{ marginBottom: 8 }} />
      <ContentWrapper tabLabels={texts.tabLabels} components={components} />
      <Box sx={{ marginBottom: 8 }} />
    </Container>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, categories] = await Promise.all([
    fetchStrapiAPI('/posts'),
    fetchStrapiAPI('/categories')
  ])

  return {
    props: { posts, categories },
    revalidate: 1
  }
}

Posts.displayName = 'Posts'

export default withTexts(Posts)
