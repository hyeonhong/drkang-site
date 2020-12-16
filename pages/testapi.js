import { fetchAuth } from '../utils/fetch'

export default function TestAPI({ data }) {
  return <p>{JSON.stringify(data, null, 2)}</p>
}

export const getServerSideProps = async (ctx) => {
  const res = await fetchAuth(ctx, '/api/getFood')
  const data = await res.json()
  return {
    props: { data }
  }
}
