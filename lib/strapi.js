function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchStrapiAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url
  return imageUrl
}
