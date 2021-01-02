import { apiRequest } from 'utils/server-side'

export default function TestAPI({ data }) {
  return <p>{JSON.stringify(data, null, 2)}</p>
}

export async function getServerSideProps(ctx) {
  const res = await apiRequest(ctx, 'getfood')
  const data = await res.json()
  return {
    props: { data }
  }
}
