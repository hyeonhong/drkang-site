import { fetchAuth } from '../utils/server-side'

export default function TestAPI({ data }) {
  return <p>{JSON.stringify(data, null, 2)}</p>
}

export async function getServerSideProps(ctx) {
  const res = await fetchAuth(ctx, '/api/getFood')
  const data = await res.json()
  return {
    props: { data }
  }
}
