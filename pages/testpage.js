export default function TestPage(props) {
  return (
    <>
      <p>{props.data.name}</p>
      <a
        href={'https://google.com'}
        onClick={(e) => {
          // e.preventDefault()
        }}
      >
        Sign in
      </a>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // get baseUrl
  const { req } = ctx
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const res = await fetch(baseUrl + '/api/hello')
  const data = await res.json()
  return {
    props: { data }
  }
}
