import { Container, Box } from '@material-ui/core'

import { fetchStrapiAPI } from 'lib/strapi'
import PostWrapper from 'components/PostWrapper'

export default function Posts({ posts, categories }) {
  const postsByCategory = categories.map((category) => category.posts)
  const allCategory = [posts, ...postsByCategory]
  const tabLabels = categories.map((category) => category.tabLabel)

  return (
    <Container>
      <Box sx={{ marginBottom: 8 }} />
      <PostWrapper tabLabels={tabLabels} allCategory={allCategory} />
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
