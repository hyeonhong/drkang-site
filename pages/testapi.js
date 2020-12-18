import { checkGuest, fetchAuth } from '../utils/server-side'

export default function TestAPI({ data }) {
  return <p>{JSON.stringify(data, null, 2)}</p>
}

export async function getServerSideProps(ctx) {
  const guestPath = await checkGuest(ctx)
  if (guestPath) {
    return guestPath
  }

  const res = await fetchAuth(ctx, '/api/getFood')
  const data = await res.json()
  return {
    props: { data }
  }
}
